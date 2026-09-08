# Assets

**Art direction:** Um mundo de caderno escolar em papel marfim, com linhas azuis claras, margem vermelha e textura sutil de grafite. O jogo usa contornos pretos irregulares, hachuras de lápis, sombras azul-cobalto e um pequeno acento coral. A composição é limpa e legível, como uma ilustração feita à mão que ganhou vida, com o avião de papel em destaque e portões desenhados como tubos verticais.

## Backgrounds

| Name | Description | Size | Image |
|---|---|---:|---|
| `paper_flight_reference` | Screenshot visual target: notebook world, plane, gate, clouds, HUD | 2560x1440 reference | `/manus-storage/paper-flight-reference_a92543de.png` |

## Sprites

| Name | Description | Size | Image |
|---|---|---:|---|
| `paper_plane` | Folded paper airplane with graphite outline and cobalt fold | 128x96 px in game | `/manus-storage/paper-plane_cd7c2037.png` |
| `scribble_cloud` | Cluster of notebook cloud doodles with blue pencil shading | 180x120 px in game | `/manus-storage/scribble-cloud_361ff393.png` |

## Procedural assets

| Name | Description | Size | Source |
|---|---|---:|---|
| `notebook_rules` | Faint blue horizontal rules and a red margin line | Fullscreen 16:9 | `NotebookBackdrop.ts` |
| `pencil_gate` | Paired graphite tubes with open gap, rings, and hatch marks | 1.15 world units wide per tube | `ObstacleManager.ts` |
| `hud_frame` | Blue graphite score card and hand-lettered labels | Overlay UI | `HudOverlay.tsx` |
