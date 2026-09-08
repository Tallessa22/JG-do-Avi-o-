import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";

const PLAYER_START_Y = -0.35;

export class Player {
  readonly mesh: Mesh;
  readonly width = 1.05;
  readonly height = 0.68;
  readonly x = -4.7;

  y = PLAYER_START_Y;
  velocityY = 0;
  private direction = 0;
  private readonly verticalSpeed = 6.6;
  private readonly acceleration = 32;
  private readonly reversalAcceleration = 135;
  private readonly braking = 42;

  constructor(mesh: Mesh) {
    this.mesh = mesh;
    this.syncMesh();
  }

  reset(): void {
    this.y = PLAYER_START_Y;
    this.velocityY = 0;
    this.direction = 0;
    this.mesh.rotation.z = 0;
    this.syncMesh();
  }

  setDirection(direction: number): void {
    this.direction = Math.max(-1, Math.min(1, direction));
  }

  snapToY(y: number): void {
    this.y = y;
    this.velocityY = 0;
    this.direction = 0;
    this.mesh.rotation.z = 0;
    this.syncMesh();
  }

  update(deltaSeconds: number): void {
    const dt = Math.min(deltaSeconds, 0.04);
    const targetVelocity = this.direction * this.verticalSpeed;
    const isReversing =
      this.direction !== 0 &&
      Math.abs(this.velocityY) > 0.08 &&
      Math.sign(targetVelocity) !== Math.sign(this.velocityY);
    const changeRate = this.direction === 0
      ? this.braking
      : isReversing
        ? this.reversalAcceleration
        : this.acceleration;
    const maximumChange = changeRate * dt;
    const velocityDifference = targetVelocity - this.velocityY;

    if (Math.abs(velocityDifference) <= maximumChange) {
      this.velocityY = targetVelocity;
    } else {
      this.velocityY += Math.sign(velocityDifference) * maximumChange;
    }

    this.y += this.velocityY * dt;
    const targetTilt = (this.velocityY / this.verticalSpeed) * 0.08;
    this.mesh.rotation.z += (targetTilt - this.mesh.rotation.z) * Math.min(1, dt * 14);
    this.syncMesh();
  }

  keepInsideBounds(minY: number, maxY: number): boolean {
    return this.y - this.height / 2 > minY && this.y + this.height / 2 < maxY;
  }

  getBounds() {
    // A colisao usa o corpo central do aviao, sem contar as pontas do desenho.
    // Isso evita perder a partida por um simples toque visual no obstaculo.
    const halfWidth = this.width * 0.25;
    const halfHeight = this.height * 0.23;
    return {
      left: this.x - halfWidth,
      right: this.x + halfWidth,
      top: this.y + halfHeight,
      bottom: this.y - halfHeight,
    };
  }

  private syncMesh(): void {
    this.mesh.position = new Vector3(this.x, this.y, -0.65);
  }
}
