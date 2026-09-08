import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Scene } from "@babylonjs/core/scene";
import "@babylonjs/core/Rendering/edgesRenderer";
import { PHASES, type PhaseConfig } from "./phases";

export type Gate = {
  root: TransformNode;
  x: number;
  gapCenter: number;
  gapSize: number;
  passed: boolean;
  topHeight: number;
  bottomHeight: number;
};

const WORLD_TOP = 4.18;
const WORLD_BOTTOM = -4.18;
const GATE_WIDTH = 1.18;
const COLLISION_GRACE = 0.1;
const FIRST_SPAWN_X = 10.8;
const GATE_SPACING = 6.2;

export class ObstacleManager {
  readonly gates: Gate[] = [];
  private readonly scene: Scene;
  private readonly tubeMaterial: StandardMaterial;
  private readonly edgeMaterial: StandardMaterial;
  private readonly hatchMaterial: StandardMaterial;
  private readonly demoMode: boolean;
  private currentPhase: PhaseConfig = PHASES[0];
  private difficultyTier = 0;
  private spawningEnabled = true;
  private spawnIndex = 0;

  constructor(scene: Scene, demoMode = false) {
    this.scene = scene;
    this.demoMode = demoMode;

    this.tubeMaterial = new StandardMaterial("graphite-paper", scene);
    this.tubeMaterial.diffuseColor = new Color3(0.87, 0.84, 0.76);
    this.tubeMaterial.specularColor = new Color3(0, 0, 0);
    this.tubeMaterial.alpha = 0.98;

    this.edgeMaterial = new StandardMaterial("graphite-edge", scene);
    this.edgeMaterial.diffuseColor = new Color3(0.12, 0.14, 0.17);
    this.edgeMaterial.specularColor = new Color3(0, 0, 0);

    this.hatchMaterial = new StandardMaterial("graphite-hatch", scene);
    this.hatchMaterial.diffuseColor = new Color3(0.35, 0.39, 0.45);
    this.hatchMaterial.specularColor = new Color3(0, 0, 0);
  }

  reset(phase: PhaseConfig = PHASES[0]): void {
    this.startPhase(phase);
  }

  startPhase(phase: PhaseConfig): void {
    this.gates.splice(0).forEach((gate) => gate.root.dispose());
    this.currentPhase = phase;
    this.difficultyTier = 0;
    this.spawningEnabled = true;
    this.spawnIndex = 0;
    this.applyPhaseColors();
    this.spawnGate(FIRST_SPAWN_X);
    this.spawnGate(FIRST_SPAWN_X + GATE_SPACING);
    this.spawnGate(FIRST_SPAWN_X + GATE_SPACING * 2);
  }

  setProgress(obstaclesPassed: number): void {
    this.difficultyTier = Math.min(9, Math.floor(obstaclesPassed / 10));
  }

  beginLanding(): void {
    this.spawningEnabled = false;
    this.gates.splice(0).forEach((gate) => gate.root.dispose());
  }

  update(deltaSeconds: number): void {
    const dt = Math.min(deltaSeconds, 0.04);
    const lastGate = this.gates[this.gates.length - 1];
    if (this.spawningEnabled && (!lastGate || lastGate.x <= FIRST_SPAWN_X + GATE_SPACING * 2)) {
      this.spawnGate(Math.max(FIRST_SPAWN_X, (lastGate?.x ?? FIRST_SPAWN_X) + GATE_SPACING));
    }

    const phaseSpeed = this.currentPhase.speed + this.difficultyTier * this.currentPhase.speedStep;
    const speed = this.demoMode ? phaseSpeed * 0.9 : phaseSpeed;
    for (const gate of this.gates) {
      gate.x -= speed * dt;
      gate.root.position.x = gate.x;
    }

    while (this.gates.length && this.gates[0].x < -11.5) {
      this.gates.shift()?.root.dispose();
    }
  }

  getNextGate(playerX: number): Gate | undefined {
    return this.gates.find((gate) => gate.x + GATE_WIDTH / 2 > playerX - 0.55);
  }

  collides(bounds: { left: number; right: number; top: number; bottom: number }): boolean {
    return this.gates.some((gate) => {
      const overlapsX =
        bounds.right > gate.x - GATE_WIDTH / 2 + COLLISION_GRACE &&
        bounds.left < gate.x + GATE_WIDTH / 2 - COLLISION_GRACE;
      if (!overlapsX) return false;
      const withinGap =
        bounds.bottom > gate.gapCenter - gate.gapSize / 2 - COLLISION_GRACE &&
        bounds.top < gate.gapCenter + gate.gapSize / 2 + COLLISION_GRACE;
      return !withinGap;
    });
  }

  collectPassed(playerX: number): number {
    let count = 0;
    for (const gate of this.gates) {
      if (!gate.passed && gate.x + GATE_WIDTH / 2 < playerX) {
        gate.passed = true;
        count += 1;
      }
    }
    return count;
  }

  dispose(): void {
    this.gates.splice(0).forEach((gate) => gate.root.dispose());
    this.tubeMaterial.dispose();
    this.edgeMaterial.dispose();
    this.hatchMaterial.dispose();
  }

  private spawnGate(x: number): void {
    const centers = this.currentPhase.centers;
    const selectedCenter = centers[this.spawnIndex % centers.length];
    const gapCenter = this.demoMode ? selectedCenter * 0.72 : selectedCenter;
    const gapSize = this.demoMode ? this.currentPhase.gapSize + 0.32 : this.currentPhase.gapSize;
    this.spawnIndex += 1;

    const bottomHeight = Math.max(0.3, gapCenter - gapSize / 2 - WORLD_BOTTOM);
    const topHeight = Math.max(0.3, WORLD_TOP - (gapCenter + gapSize / 2));
    const root = new TransformNode(`gate-${this.spawnIndex}`, this.scene);
    root.position.x = x;
    this.createTube(root, 0, WORLD_BOTTOM + bottomHeight / 2, bottomHeight);
    this.createTube(root, 0, WORLD_TOP - topHeight / 2, topHeight);
    this.gates.push({ root, x, gapCenter, gapSize, passed: false, topHeight, bottomHeight });
  }

  private applyPhaseColors(): void {
    if (this.currentPhase.id === 1) {
      this.tubeMaterial.diffuseColor = new Color3(0.87, 0.84, 0.76);
      this.edgeMaterial.diffuseColor = new Color3(0.12, 0.14, 0.17);
      this.hatchMaterial.diffuseColor = new Color3(0.35, 0.39, 0.45);
      return;
    }

    if (this.currentPhase.id === 2) {
      this.tubeMaterial.diffuseColor = new Color3(0.78, 0.9, 0.95);
      this.edgeMaterial.diffuseColor = new Color3(0.08, 0.31, 0.45);
      this.hatchMaterial.diffuseColor = new Color3(0.16, 0.48, 0.62);
      return;
    }

    this.tubeMaterial.diffuseColor = new Color3(0.25, 0.31, 0.39);
    this.edgeMaterial.diffuseColor = new Color3(0.96, 0.71, 0.2);
    this.hatchMaterial.diffuseColor = new Color3(0.68, 0.74, 0.82);
  }

  private createTube(root: TransformNode, x: number, y: number, height: number): void {
    const tube = MeshBuilder.CreateBox(`tube-${this.spawnIndex}-${y}`, { width: GATE_WIDTH, height, depth: 0.7 }, this.scene);
    tube.parent = root;
    tube.position.set(x, y, 0.12);
    tube.material = this.tubeMaterial;
    tube.enableEdgesRendering();
    tube.edgesWidth = 2.1;
    tube.edgesColor = new Color3(0.13, 0.15, 0.18).toColor4(0.92);

    const cap = MeshBuilder.CreateCylinder(`cap-${this.spawnIndex}-${y}`, { height: 0.12, diameter: GATE_WIDTH * 0.96, tessellation: 12 }, this.scene);
    cap.parent = root;
    cap.position.set(x, y + Math.sign(y) * (height / 2 - 0.06), -0.03);
    cap.rotation.x = Math.PI / 2;
    cap.material = this.edgeMaterial;

    const hatchCount = Math.max(2, Math.floor(height / 0.58));
    for (let index = 0; index < hatchCount; index += 1) {
      const hatchY = y - height / 2 + 0.22 + index * 0.55;
      const hatch = MeshBuilder.CreateBox(`hatch-${this.spawnIndex}-${y}-${index}`, { width: GATE_WIDTH * 0.76, height: 0.028, depth: 0.025 }, this.scene);
      hatch.parent = root;
      hatch.position.set(x - 0.02, hatchY, -0.28);
      hatch.rotation.z = index % 2 === 0 ? -0.18 : 0.14;
      hatch.material = this.hatchMaterial;
    }
  }
}
