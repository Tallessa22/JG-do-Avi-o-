import { Scene } from "@babylonjs/core/scene";
import { Player } from "./Player";
import { ObstacleManager } from "./ObstacleManager";
import { NotebookBackdrop } from "./NotebookBackdrop";
import { PHASES, type PhaseConfig, type PhaseId } from "./phases";

export type GameStatus =
  | "idle"
  | "playing"
  | "landing"
  | "transition"
  | "countdown"
  | "gameover"
  | "completed";

export type GameState = {
  status: GameStatus;
  score: number;
  best: number;
  started: boolean;
  phase: PhaseId;
  phaseName: string;
  phaseSubtitle: string;
  phaseProgress: number;
  phaseTarget: number;
  speedLevel: number;
  currentSpeed: number;
  countdown: number | null;
  nextPhaseName: string | null;
};

type StateListener = (state: GameState) => void;

const PHASE_TARGET = 100;
const LANDING_TARGET_Y = -2.92;

export class GameWorld {
  readonly player: Player;
  readonly obstacles: ObstacleManager;
  readonly backdrop: NotebookBackdrop;
  readonly demoMode: boolean;

  status: GameStatus = "playing";
  score = 0;
  best = Number(localStorage.getItem("paper-flight-best") ?? 0);
  private readonly onStateChange: StateListener;
  private autopilotTime = 0;
  private phaseProgress = 0;
  private phaseIndex = 0;
  private currentPhase: PhaseConfig = PHASES[0];
  private sequenceClock = 0;
  private countdownValue: number | null = null;

  constructor(scene: Scene, player: Player, onStateChange: StateListener, demoMode: boolean) {
    this.player = player;
    this.onStateChange = onStateChange;
    this.demoMode = demoMode;
    this.obstacles = new ObstacleManager(scene, demoMode);
    this.backdrop = new NotebookBackdrop(scene);
    this.reset();
  }

  reset(): void {
    this.status = "playing";
    this.phaseIndex = 0;
    this.currentPhase = PHASES[0];
    this.phaseProgress = this.demoMode ? 4 : 0;
    this.score = this.phaseProgress;
    this.sequenceClock = 0;
    this.countdownValue = null;
    this.autopilotTime = 0;
    this.best = Math.max(this.best, this.score);
    this.player.reset();
    this.player.mesh.isVisible = true;
    this.backdrop.hideRunway();
    this.backdrop.setPhase(this.currentPhase);
    this.obstacles.reset(this.currentPhase);
    this.obstacles.setProgress(this.phaseProgress);
    this.emit();
  }

  restartPhase(fromBeginning = false): void {
    if (fromBeginning) {
      this.phaseIndex = 0;
      this.currentPhase = PHASES[0];
    }

    this.status = "countdown";
    this.phaseProgress = 0;
    this.score = this.currentPhase.startsAt;
    this.sequenceClock = 0;
    this.countdownValue = 3;
    this.autopilotTime = 0;
    this.player.reset();
    this.player.mesh.isVisible = true;
    this.obstacles.beginLanding();
    this.backdrop.hideRunway();
    this.backdrop.setPhase(this.currentPhase);
    this.emit();
  }

  setDirection(direction: number): void {
    if (this.status !== "playing") return;
    this.player.setDirection(direction);
  }

  update(deltaSeconds: number): void {
    const dt = Math.min(deltaSeconds, 0.04);
    this.backdrop.update(dt);

    if (this.status === "landing") {
      this.updateLanding(dt);
      return;
    }
    if (this.status === "transition") {
      this.updateTransition(dt);
      return;
    }
    if (this.status === "countdown") {
      this.updateCountdown(dt);
      return;
    }
    if (this.status !== "playing") return;

    this.autopilotTime += dt;
    if (this.demoMode) this.runAutopilot();

    this.player.update(dt);
    this.obstacles.update(dt);

    if (!this.player.keepInsideBounds(-4.12, 4.12) || this.obstacles.collides(this.player.getBounds())) {
      this.status = "gameover";
      this.best = Math.max(this.best, this.score);
      localStorage.setItem("paper-flight-best", String(this.best));
      this.emit();
      return;
    }

    const gained = this.obstacles.collectPassed(this.player.x);
    if (!gained) return;

    this.score += gained;
    this.phaseProgress = Math.min(PHASE_TARGET, this.phaseProgress + gained);
    this.best = Math.max(this.best, this.score);
    localStorage.setItem("paper-flight-best", String(this.best));

    if (this.phaseProgress >= PHASE_TARGET) {
      this.beginLanding();
      return;
    }

    this.obstacles.setProgress(this.phaseProgress);
    this.emit();
  }

  dispose(): void {
    this.obstacles.dispose();
    this.backdrop.dispose();
  }

  private beginLanding(): void {
    this.status = "landing";
    this.sequenceClock = 0;
    this.player.setDirection(0);
    this.obstacles.beginLanding();
    this.backdrop.showRunway();
    this.emit();
  }

  private updateLanding(dt: number): void {
    this.sequenceClock += dt;
    const distance = LANDING_TARGET_Y - this.player.y;
    this.player.setDirection(distance > 0.1 ? 1 : distance < -0.1 ? -1 : 0);
    this.player.update(dt);

    if (Math.abs(LANDING_TARGET_Y - this.player.y) < 0.08 && Math.abs(this.player.velocityY) < 0.65) {
      this.player.snapToY(LANDING_TARGET_Y);
    }

    if (this.sequenceClock >= 4.8) {
      this.player.snapToY(LANDING_TARGET_Y);
      this.status = "transition";
      this.sequenceClock = 0;
      this.emit();
    }
  }

  private updateTransition(dt: number): void {
    this.sequenceClock += dt;
    if (this.sequenceClock < 2.35) return;

    if (this.phaseIndex >= PHASES.length - 1) {
      this.status = "completed";
      this.backdrop.hideRunway();
      this.emit();
      return;
    }

    this.phaseIndex += 1;
    this.currentPhase = PHASES[this.phaseIndex];
    this.phaseProgress = 0;
    this.sequenceClock = 0;
    this.countdownValue = 3;
    this.player.reset();
    this.backdrop.hideRunway();
    this.backdrop.setPhase(this.currentPhase);
    this.status = "countdown";
    this.emit();
  }

  private updateCountdown(dt: number): void {
    this.sequenceClock += dt;
    const nextValue = this.sequenceClock < 1
      ? 3
      : this.sequenceClock < 2
        ? 2
        : this.sequenceClock < 3
          ? 1
          : 0;

    if (nextValue !== this.countdownValue) {
      this.countdownValue = nextValue;
      this.emit();
    }

    if (this.sequenceClock < 3.65) return;

    this.sequenceClock = 0;
    this.countdownValue = null;
    this.status = "playing";
    this.obstacles.startPhase(this.currentPhase);
    this.emit();
  }

  private runAutopilot(): void {
    const next = this.obstacles.getNextGate(this.player.x);
    if (!next) return;
    const targetY = next.gapCenter + Math.sin(this.autopilotTime * 0.8) * 0.24;
    const distance = targetY - this.player.y;
    this.player.setDirection(distance > 0.16 ? 1 : distance < -0.16 ? -1 : 0);
  }

  private emit(): void {
    const difficultyTier = Math.min(9, Math.floor(this.phaseProgress / 10));

    this.onStateChange({
      status: this.status,
      score: this.score,
      best: this.best,
      started: this.status !== "idle",
      phase: this.currentPhase.id,
      phaseName: this.currentPhase.name,
      phaseSubtitle: this.currentPhase.subtitle,
      phaseProgress: this.phaseProgress,
      phaseTarget: PHASE_TARGET,
      speedLevel: difficultyTier + 1,
      currentSpeed: this.currentPhase.speed + difficultyTier * this.currentPhase.speedStep,
      countdown: this.countdownValue,
      nextPhaseName: PHASES[this.phaseIndex + 1]?.name ?? null,
    });
  }
}
