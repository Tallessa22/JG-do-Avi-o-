import { useEffect, useRef, useState } from "react";
import { Engine } from "@babylonjs/core/Engines/engine";
import { createGameScene, type GameHandle } from "@/game/scene";
import type { GameState } from "@/game/GameWorld";
import type { JoystickState } from "@/game/InputManager";
import { PHASES } from "@/game/phases";
import HudOverlay from "@/components/HudOverlay";

const initialState: GameState = {
  status: "idle",
  score: 0,
  best: 0,
  started: false,
  phase: 1,
  phaseName: PHASES[0].name,
  phaseSubtitle: PHASES[0].subtitle,
  phaseProgress: 0,
  phaseTarget: 100,
  speedLevel: 1,
  currentSpeed: PHASES[0].speed,
  countdown: null,
  nextPhaseName: PHASES[1].name,
};

const hiddenJoystick: JoystickState = { active: false, x: 0, y: 0, knobOffsetY: 0 };

export default function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const startedRef = useRef(false);
  const portraitRef = useRef(window.innerHeight > window.innerWidth);
  const handleRef = useRef<GameHandle | null>(null);
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [runtimeError, setRuntimeError] = useState<string | null>(null);
  const [isPortrait, setIsPortrait] = useState(portraitRef.current);
  const [joystick, setJoystick] = useState<JoystickState>(hiddenJoystick);

  const enterLandscape = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen({ navigationUI: "hide" });
      }
    } catch {
      // Alguns navegadores não permitem tela cheia; a rotação manual continua disponível.
    }

    try {
      const orientation = screen.orientation as ScreenOrientation & {
        lock?: (value: "landscape") => Promise<void>;
      };
      await orientation.lock?.("landscape");
    } catch {
      // O bloqueio de orientação depende do navegador e da rotação automática do aparelho.
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || startedRef.current) return;
    startedRef.current = true;
    const engine = new Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
      adaptToDeviceRatio: true,
    });
    let disposed = false;

    try {
      const handle = createGameScene(engine, canvas, {
        onStateChange: setGameState,
        onJoystickChange: setJoystick,
      });
      if (!disposed) {
        handleRef.current = handle;
        engine.runRenderLoop(() => {
          if (!portraitRef.current) handle.scene.render();
        });
      } else {
        handle.dispose();
      }
    } catch (error) {
      console.error("Paper Flight scene failed to initialize", error);
      setRuntimeError(error instanceof Error ? error.message : String(error));
    }

    const onResize = () => {
      const portrait = window.innerHeight > window.innerWidth;
      portraitRef.current = portrait;
      setIsPortrait(portrait);
      engine.resize();
      handleRef.current?.resize();
    };
    window.addEventListener("resize", onResize);
    return () => {
      disposed = true;
      window.removeEventListener("resize", onResize);
      handleRef.current?.dispose();
      handleRef.current = null;
      engine.dispose();
      startedRef.current = false;
    };
  }, []);

  const restart = () => {
    setJoystick(hiddenJoystick);
    handleRef.current?.restart(gameState.status === "completed");
  };

  return (
    <main className="game-shell">
      <canvas
        ref={canvasRef}
        className="game-canvas"
        style={{ touchAction: "none" }}
        onPointerDown={() => void enterLandscape()}
      />
      <HudOverlay state={gameState} onRestart={restart} />
      {joystick.active && gameState.status === "playing" && !isPortrait && (
        <div
          className={`touch-joystick phase-${gameState.phase}`}
          aria-hidden="true"
          style={{
            left: joystick.x,
            top: joystick.y,
            "--knob-y": `${joystick.knobOffsetY}px`,
          } as React.CSSProperties}
        >
          <span className="touch-joystick-arrow touch-joystick-arrow-up">⌃</span>
          <span className="touch-joystick-knob" />
          <span className="touch-joystick-arrow touch-joystick-arrow-down">⌄</span>
        </div>
      )}
      {isPortrait && (
        <section className="orientation-gate" role="dialog" aria-label="Jogar no modo paisagem">
          <div className="orientation-symbol" aria-hidden="true">↻</div>
          <strong>Jogue com o celular deitado</strong>
          <p>O voo fica pausado enquanto a tela estiver na vertical.</p>
          <button type="button" onClick={() => void enterLandscape()}>
            Girar e abrir em tela cheia
          </button>
          <small>Se não girar sozinho, ative a rotação automática do celular.</small>
        </section>
      )}
      {runtimeError && <div className="gameover-card" style={{ top: "76%" }}>Scene error: {runtimeError}</div>}
    </main>
  );
}
