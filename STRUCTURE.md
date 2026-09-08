# Structure: Paper Flight — Notebook Skies

## Runtime shape

React owns only the full-screen canvas frame. Babylon owns the orthographic scene, camera, materials, sprite planes, and render loop. Gameplay is plain TypeScript under `client/src/game/` so the physics and obstacle rules stay independent of React.

## Modules

| Module | Responsibility |
|---|---|
| `scene.ts` | Creates the Babylon scene, camera, notebook background, assets, gameplay world, and cleanup handle. |
| `GameWorld.ts` | Owns run state, score, best score, update cadence, restart, collision checks, and scene-level UI callbacks. |
| `Player.ts` | Owns the plane sprite mesh, vertical velocity, flap impulse, rotation, and bounds collision. |
| `ObstacleManager.ts` | Spawns, scrolls, recycles, draws, and scores paired pencil gates. |
| `InputManager.ts` | Normalizes pointer/touch/keyboard input into a semantic flap action and exposes cleanup. |
| `NotebookBackdrop.ts` | Draws the ruled paper background, red margin, doodle accents, and generated cloud sprite layers. |
| `HudOverlay.tsx` | React overlay for the title, score, start prompt, run status, and restart card. It receives state through a lightweight custom event bridge. |

## Coordinate system

The scene uses a 16:9 orthographic camera with world width 16 and height 9. The plane stays near x=-5.1 while gates scroll from x=10.5 to -10.5. Y increases upward. The play bounds are y=-3.9 and y=3.9, leaving room for the HUD overlay.

## Asset hints

The plane and cloud images are loaded as alpha-enabled `Texture` instances from their `/manus-storage/` URLs. Gates are intentionally procedural: cylinders, thin ring meshes, and graphite hatch lines are used because their repeated geometry must remain crisp as it scrolls. Notebook rules and the margin are procedural line meshes; they are not gameplay entities.

## State bridge

`GameWorld` accepts an `onStateChange` callback and emits `{ status, score, best, started }`. `scene.ts` exposes that callback through a `GameHandle`, and `GameCanvas.tsx` renders the `HudOverlay` in the same component tree while Babylon updates the game state. All input listeners are removed in `dispose()`.
