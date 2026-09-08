export type JoystickState = {
  active: boolean;
  x: number;
  y: number;
  knobOffsetY: number;
};

export class InputManager {
  private readonly onDirection: (direction: number) => void;
  private readonly onJoystickChange?: (state: JoystickState) => void;
  private readonly canvas: HTMLCanvasElement;
  private pointerActive = false;
  private activePointerId: number | null = null;
  private originX = 0;
  private originY = 0;

  private static readonly DEAD_ZONE = 4;
  private static readonly MAX_TRAVEL = 42;

  private readonly handlePointerDown = (event: PointerEvent) => {
    if (this.pointerActive) return;
    event.preventDefault();
    this.pointerActive = true;
    this.activePointerId = event.pointerId;
    const rect = this.canvas.getBoundingClientRect();
    this.originX = event.clientX - rect.left;
    this.originY = event.clientY - rect.top;
    this.canvas.setPointerCapture?.(event.pointerId);
    this.onDirection(0);
    this.onJoystickChange?.({
      active: true,
      x: this.originX,
      y: this.originY,
      knobOffsetY: 0,
    });
  };
  private readonly handlePointerMove = (event: PointerEvent) => {
    if (!this.pointerActive || event.pointerId !== this.activePointerId) return;
    event.preventDefault();
    this.updatePointerDirection(event);
  };
  private readonly handlePointerUp = (event: PointerEvent) => {
    if (!this.pointerActive || event.pointerId !== this.activePointerId) return;
    event.preventDefault();
    this.pointerActive = false;
    this.activePointerId = null;
    this.onDirection(0);
    this.onJoystickChange?.({ active: false, x: this.originX, y: this.originY, knobOffsetY: 0 });
  };
  private readonly handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "ArrowUp" || event.code === "KeyW") {
      event.preventDefault();
      this.onDirection(1);
    } else if (event.code === "ArrowDown" || event.code === "KeyS") {
      event.preventDefault();
      this.onDirection(-1);
    }
  };
  private readonly handleKeyUp = (event: KeyboardEvent) => {
    if (["ArrowUp", "ArrowDown", "KeyW", "KeyS"].includes(event.code)) {
      event.preventDefault();
      this.onDirection(0);
    }
  };

  constructor(
    canvas: HTMLCanvasElement,
    onDirection: (direction: number) => void,
    onJoystickChange?: (state: JoystickState) => void,
  ) {
    this.canvas = canvas;
    this.onDirection = onDirection;
    this.onJoystickChange = onJoystickChange;
    canvas.addEventListener("pointerdown", this.handlePointerDown, { passive: false });
    canvas.addEventListener("pointermove", this.handlePointerMove, { passive: false });
    canvas.addEventListener("pointerup", this.handlePointerUp, { passive: false });
    canvas.addEventListener("pointercancel", this.handlePointerUp, { passive: false });
    canvas.addEventListener("lostpointercapture", this.handlePointerUp, { passive: false });
    window.addEventListener("keydown", this.handleKeyDown, { passive: false });
    window.addEventListener("keyup", this.handleKeyUp, { passive: false });
  }

  dispose(): void {
    this.canvas.removeEventListener("pointerdown", this.handlePointerDown);
    this.canvas.removeEventListener("pointermove", this.handlePointerMove);
    this.canvas.removeEventListener("pointerup", this.handlePointerUp);
    this.canvas.removeEventListener("pointercancel", this.handlePointerUp);
    this.canvas.removeEventListener("lostpointercapture", this.handlePointerUp);
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
  }

  private updatePointerDirection(event: PointerEvent): void {
    const rect = this.canvas.getBoundingClientRect();
    const localY = event.clientY - rect.top;
    const rawDeltaY = localY - this.originY;
    const absoluteDelta = Math.abs(rawDeltaY);
    const adjustedDelta = absoluteDelta <= InputManager.DEAD_ZONE
      ? 0
      : Math.sign(rawDeltaY) * (absoluteDelta - InputManager.DEAD_ZONE);
    const knobOffsetY = Math.max(
      -InputManager.MAX_TRAVEL,
      Math.min(InputManager.MAX_TRAVEL, rawDeltaY),
    );
    const strength = Math.max(
      -1,
      Math.min(1, -adjustedDelta / (InputManager.MAX_TRAVEL - InputManager.DEAD_ZONE)),
    );

    this.onDirection(strength);
    this.onJoystickChange?.({
      active: true,
      x: this.originX,
      y: this.originY,
      knobOffsetY,
    });
  }
}
