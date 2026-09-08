export type PhaseId = 1 | 2 | 3;

export type PhaseConfig = {
  id: PhaseId;
  name: string;
  subtitle: string;
  startsAt: number;
  speed: number;
  speedStep: number;
  gapSize: number;
  spawnInterval: number;
  centers: readonly number[];
};

export const PHASES: readonly PhaseConfig[] = [
  {
    id: 1,
    name: "Caderno",
    subtitle: "Aprenda a controlar o voo",
    startsAt: 0,
    speed: 6.6,
    speedStep: 0.5,
    gapSize: 2.65,
    spawnInterval: 3.05,
    // A rota cruza a linha central em ondas graduais: ficar parado em y=0
    // deixa de ser uma estrategia segura, sem exigir mudancas verticais injustas.
    centers: [1.65, 1.2, 0.35, -0.75, -1.65, -1.2, -0.3, 0.8],
  },
  {
    id: 2,
    name: "Céu Aberto",
    subtitle: "Mais velocidade entre as nuvens",
    startsAt: 100,
    speed: 8.3,
    speedStep: 0.69,
    gapSize: 2.4,
    spawnInterval: 2.8,
    centers: [0.8, -0.9, 0.25, 1.15, -1.15, 0.5, -0.45],
  },
  {
    id: 3,
    name: "Tempestade",
    subtitle: "Passagens menores e voo mais rápido",
    startsAt: 200,
    speed: 8.75,
    speedStep: 0.78,
    gapSize: 2.15,
    spawnInterval: 2.55,
    centers: [-1.25, 0.95, -0.55, 1.35, -1.1, 0.35, 1.05, -0.85],
  },
] as const;

export function getPhaseForScore(score: number): PhaseConfig {
  for (let index = PHASES.length - 1; index >= 0; index -= 1) {
    if (score >= PHASES[index].startsAt) return PHASES[index];
  }
  return PHASES[0];
}
