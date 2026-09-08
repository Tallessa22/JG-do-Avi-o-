# Game Plan: Paper Flight — Notebook Skies

## Risk Tasks

### 1. Flappy-style flight physics and touch input
- **Why isolated:** The core feel depends on a stable gravity/impulse loop, responsive pointer input, and predictable collision bounds in a continuously scrolling scene.
- **Approach:** Keep vertical velocity in a framework-agnostic `Player` class, apply gravity every frame, reset velocity on tap, and use simple AABB checks against the procedural gate rectangles. Support pointer/touch, Space, and Enter through one semantic `flap` action. Add a deterministic `?demo` autopilot that pulses on a fixed cadence for screenshot verification.
- **Verify:** Tapping/Space visibly lifts the plane; releasing lets it fall; the plane rotates toward its velocity; collision ends the run without clipping through a gate; `?demo` produces a stable mid-run state with a non-zero score.

### 2. Procedural pencil gates and scrolling cadence
- **Why isolated:** Obstacles must read as hand-sketched tubes while moving at a steady pace and leaving a traversable gap.
- **Approach:** Spawn paired procedural tube meshes at fixed horizontal intervals, vary the gap center within safe bounds, scroll them left, and recycle/remove passed gates. Add graphite outline rings and hatch marks so the obstacles do not read as generic cylinders.
- **Verify:** Every gate has a visible opening; gates move left consistently; score increments exactly once when the plane passes the gate; the gate geometry and hatch marks remain aligned while moving.

## Main Build

Build a full-screen Babylon.js arcade game with an orthographic side camera. The cream notebook page is the playfield, with faint blue rules, a red margin, graphite texture, a paper airplane sprite, drifting scribbled clouds, pencil-sketched gates, and a clear HUD. The first tap starts the flight; subsequent taps flap upward. Crashing shows a compact restart card and preserves the best score in local storage.

- **Assets:**
  - `/manus-storage/paper-plane_cd7c2037.png` — generated paper airplane sprite, displayed at approximately 128x96 px.
  - `/manus-storage/scribble-cloud_361ff393.png` — generated cloud doodle sprite, displayed at approximately 180x120 px in parallax layers.
  - `/manus-storage/paper-flight-reference_a92543de.png` — visual target/reference recorded in `ASSETS.md`; the live scene recreates its notebook composition using the generated sprites and procedural pencil gates.
- **Verify:**
  - Pointer/touch and keyboard input are responsive and accessible.
  - Physics objects respond to gravity and the flap impulse.
  - UI is readable, does not overlap the playfield, and remains usable on narrow mobile viewports.
  - Score increments on each successfully cleared gate and best score persists after restart.
  - No missing textures, obvious fallback materials, or browser console errors.
  - `?demo` shows a deterministic active flight with clouds, gates, the plane, and a non-zero score.
  - Visual consistency: warm ivory paper, blue ruled lines, red margin, graphite/cobalt accents, and hand-drawn UI labels.
  - `pnpm check` and `pnpm build` pass.
  - Final WebDev screenshot shows the playable game, HUD, score, plane, clouds, and a complete obstacle gate.
