import { useEffect, useState } from "react";
import type { GameState } from "@/game/GameWorld";

type HudOverlayProps = {
  state: GameState;
  onRestart: () => void;
};

export default function HudOverlay({ state, onRestart }: HudOverlayProps) {
  const isGameOver = state.status === "gameover";
  const isCompleted = state.status === "completed";
  const isIdle = state.status === "idle";
  const [showPhaseBanner, setShowPhaseBanner] = useState(true);
  const [showSpeedBoost, setShowSpeedBoost] = useState(false);

  useEffect(() => {
    setShowPhaseBanner(true);
    const timer = window.setTimeout(() => setShowPhaseBanner(false), 1900);
    return () => window.clearTimeout(timer);
  }, [state.phase]);

  useEffect(() => {
    if (state.speedLevel <= 1 || state.status !== "playing") return;
    setShowSpeedBoost(true);
    const timer = window.setTimeout(() => setShowSpeedBoost(false), 1250);
    return () => window.clearTimeout(timer);
  }, [state.speedLevel, state.status]);

  return (
    <div className={`hud-layer phase-${state.phase}`} aria-live="polite">
      <header className="hud-topbar">
        <div className="brand-lockup">
          <div className="brand-kicker">SKETCHBOOK ARCADE · 01</div>
          <h1>Paper Flight</h1>
          <div className="brand-underline" />
        </div>
        <div className="score-card">
          <div className="score-label"><span>✶</span> TOTAL <span>✶</span></div>
          <div className="score-value">{String(state.score).padStart(2, "0")}</div>
          <div className="phase-progress">FASE {state.phaseProgress} / {state.phaseTarget}</div>
          <div className="speed-level">VELOCIDADE {state.currentSpeed.toFixed(1)} · NÍVEL {state.speedLevel}/10</div>
          <div className="best-value">BEST {String(state.best).padStart(2, "0")}</div>
        </div>
      </header>

      <div className="phase-chip">FASE {state.phase} · {state.phaseName} · {state.phaseProgress}/100</div>

      {state.status === "playing" && (
        <div className="flight-note">✎ DESVIE DOS OBSTÁCULOS<br /><span>toque e arraste ↑ ou ↓</span></div>
      )}

      {showSpeedBoost && state.status === "playing" && (
        <div className="speed-boost" role="status">
          VELOCIDADE AUMENTOU · NÍVEL {state.speedLevel}
        </div>
      )}

      {showPhaseBanner && state.phase === 1 && state.status === "playing" && (
        <div className="phase-banner" role="status">
          <span>FASE {state.phase}</span>
          <strong>{state.phaseName}</strong>
          <small>{state.phaseSubtitle}</small>
        </div>
      )}

      {state.status === "landing" && (
        <div className="landing-banner" role="status">
          <span>100 / 100</span>
          <strong>Pouso automático</strong>
          <small>Fase {state.phase} concluída</small>
        </div>
      )}

      {state.status === "transition" && (
        <div className="transition-vignette" role="status">
          <div className="transition-message">
            <span>FASE {state.phase} CONCLUÍDA</span>
            <strong>{state.nextPhaseName ? `Próxima: ${state.nextPhaseName}` : "Jornada concluída"}</strong>
          </div>
        </div>
      )}

      {state.status === "countdown" && (
        <div className="countdown-vignette" role="status">
          <div className="countdown-content">
            <div className="countdown-title">FASE {state.phase} · {state.phaseName}</div>
            <div className="countdown-number">{state.countdown}</div>
            <div className="countdown-copy">Prepare-se</div>
          </div>
        </div>
      )}

      {isIdle && (
        <div className="start-card">
          <div className="start-arrow">→</div>
          <div>
            <p className="card-eyebrow">PRONTO, PILOTO?</p>
            <p className="start-title">Voo em linha reta</p>
            <p className="card-copy">Toque e arraste para cima ou para baixo<br />usando o analógico transparente.</p>
          </div>
        </div>
      )}

      {isGameOver && (
        <div className="gameover-card">
          <div className="card-eyebrow">VOO ENCERRADO · FASE {state.phase}</div>
          <div className="gameover-title">Boa tentativa, piloto.</div>
          <div className="result-row"><span>OBSTÁCULOS</span><strong>{String(state.score).padStart(2, "0")}</strong></div>
          <button className="restart-button" type="button" onClick={onRestart}>Recomeçar fase {state.phase} ↗</button>
        </div>
      )}

      {isCompleted && (
        <div className="gameover-card completed-card">
          <div className="card-eyebrow">TODAS AS FASES CONCLUÍDAS</div>
          <div className="gameover-title">Voo completo!</div>
          <div className="result-row"><span>TOTAL DE OBSTÁCULOS</span><strong>{state.score}</strong></div>
          <button className="restart-button" type="button" onClick={onRestart}>Voar novamente ↗</button>
        </div>
      )}

      <footer className="hud-footer">
        <span>✦ MIND THE MARGIN</span>
        <span className="footer-center">
          {isGameOver || isCompleted
            ? "TENTE NOVAMENTE"
            : state.status === "landing"
              ? "PILOTO AUTOMÁTICO"
              : "TOQUE E ARRASTE ↑ · ↓"}
        </span>
        <span>2026 / NOTE 01</span>
      </footer>
    </div>
  );
}
