import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Scene } from "@babylonjs/core/scene";
import type { PhaseConfig } from "./phases";

export class NotebookBackdrop {
  private readonly scene: Scene;
  private readonly cloudGroups: TransformNode[] = [];
  private readonly cloudSpeeds = [0.22, 0.14, 0.3];
  private readonly rainMeshes: Mesh[] = [];
  private paperMaterial!: StandardMaterial;
  private ruleMaterial!: StandardMaterial;
  private marginMaterial!: StandardMaterial;
  private cloudMaterial!: StandardMaterial;
  private rainMaterial!: StandardMaterial;
  private runwayRoot!: TransformNode;
  private runwayMaterial!: StandardMaterial;
  private runwayGroundMaterial!: StandardMaterial;
  private runwayEdgeMaterial!: StandardMaterial;
  private runwayMarkMaterial!: StandardMaterial;
  private runwayLightMaterial!: StandardMaterial;
  private runwayTowerMaterial!: StandardMaterial;
  private phaseId = 1;

  constructor(scene: Scene) {
    this.scene = scene;
    this.createPaper();
    this.createRules();
    this.createMargin();
    this.createClouds();
    this.createRain();
    this.createRunway();
  }

  update(deltaSeconds: number): void {
    this.cloudGroups.forEach((cloud, index) => {
      cloud.position.x -= this.cloudSpeeds[index] * deltaSeconds;
      if (cloud.position.x < -11.6) cloud.position.x = 11.6 + index * 1.2;
    });

    if (this.phaseId === 3) {
      this.rainMeshes.forEach((drop, index) => {
        drop.position.y -= (3.7 + (index % 4) * 0.38) * deltaSeconds;
        drop.position.x -= 0.75 * deltaSeconds;
        if (drop.position.y < -5.2) {
          drop.position.y = 5.2;
          drop.position.x = -9.5 + ((index * 1.37) % 19);
        }
      });
    }

    if (this.runwayRoot.isEnabled()) {
      this.runwayRoot.position.x = Math.max(-0.2, this.runwayRoot.position.x - 5.6 * deltaSeconds);
    }
  }

  showRunway(): void {
    this.runwayRoot.position.x = 14;
    this.runwayRoot.setEnabled(true);
  }

  hideRunway(): void {
    this.runwayRoot.setEnabled(false);
  }

  setPhase(phase: PhaseConfig): void {
    this.phaseId = phase.id;

    if (phase.id === 1) {
      this.scene.clearColor = new Color4(0.96, 0.94, 0.86, 1);
      this.paperMaterial.diffuseColor = new Color3(0.96, 0.94, 0.86);
      this.ruleMaterial.alpha = 0.18;
      this.marginMaterial.alpha = 0.3;
      this.cloudMaterial.diffuseColor = new Color3(0.78, 0.83, 0.87);
      this.cloudMaterial.alpha = 0.12;
      this.rainMaterial.alpha = 0;
      this.runwayGroundMaterial.diffuseColor = new Color3(0.58, 0.48, 0.32);
      this.runwayEdgeMaterial.diffuseColor = new Color3(0.2, 0.4, 0.68);
      return;
    }

    if (phase.id === 2) {
      this.scene.clearColor = new Color4(0.68, 0.86, 0.96, 1);
      this.paperMaterial.diffuseColor = new Color3(0.7, 0.87, 0.96);
      this.ruleMaterial.alpha = 0.04;
      this.marginMaterial.alpha = 0;
      this.cloudMaterial.diffuseColor = new Color3(0.98, 0.99, 1);
      this.cloudMaterial.alpha = 0.72;
      this.rainMaterial.alpha = 0;
      this.runwayGroundMaterial.diffuseColor = new Color3(0.24, 0.52, 0.3);
      this.runwayEdgeMaterial.diffuseColor = new Color3(0.88, 0.96, 1);
      return;
    }

    this.scene.clearColor = new Color4(0.1, 0.16, 0.24, 1);
    this.paperMaterial.diffuseColor = new Color3(0.13, 0.2, 0.29);
    this.ruleMaterial.alpha = 0.06;
    this.marginMaterial.alpha = 0;
    this.cloudMaterial.diffuseColor = new Color3(0.38, 0.45, 0.54);
    this.cloudMaterial.alpha = 0.66;
    this.rainMaterial.alpha = 0.48;
    this.runwayGroundMaterial.diffuseColor = new Color3(0.16, 0.25, 0.32);
    this.runwayEdgeMaterial.diffuseColor = new Color3(0.96, 0.71, 0.2);
  }

  dispose(): void {
    this.cloudGroups.forEach((cloud) => cloud.dispose());
    this.rainMeshes.forEach((drop) => drop.dispose());
    this.paperMaterial.dispose();
    this.ruleMaterial.dispose();
    this.marginMaterial.dispose();
    this.cloudMaterial.dispose();
    this.rainMaterial.dispose();
    this.runwayRoot.dispose();
    this.runwayMaterial.dispose();
    this.runwayGroundMaterial.dispose();
    this.runwayEdgeMaterial.dispose();
    this.runwayMarkMaterial.dispose();
    this.runwayLightMaterial.dispose();
    this.runwayTowerMaterial.dispose();
  }

  private createPaper(): void {
    const paper = MeshBuilder.CreatePlane("notebook-paper", { width: 23, height: 11 }, this.scene);
    paper.position.set(0, 0, 5);
    paper.rotation.y = Math.PI;
    this.paperMaterial = new StandardMaterial("paper", this.scene);
    this.paperMaterial.diffuseColor = new Color3(0.96, 0.94, 0.86);
    this.paperMaterial.specularColor = new Color3(0, 0, 0);
    paper.material = this.paperMaterial;
  }

  private createRules(): void {
    this.ruleMaterial = new StandardMaterial("blue-rules", this.scene);
    this.ruleMaterial.diffuseColor = new Color3(0.56, 0.68, 0.78);
    this.ruleMaterial.alpha = 0.18;
    this.ruleMaterial.specularColor = new Color3(0, 0, 0);
    for (let y = -4.6; y <= 4.6; y += 0.62) {
      const line = MeshBuilder.CreateBox(`rule-${y}`, { width: 22, height: 0.012, depth: 0.02 }, this.scene);
      line.position.set(0, y, 4.74);
      line.material = this.ruleMaterial;
    }
  }

  private createMargin(): void {
    this.marginMaterial = new StandardMaterial("red-margin", this.scene);
    this.marginMaterial.diffuseColor = new Color3(0.76, 0.27, 0.25);
    this.marginMaterial.alpha = 0.3;
    this.marginMaterial.specularColor = new Color3(0, 0, 0);
    const margin = MeshBuilder.CreateBox("red-margin-line", { width: 0.03, height: 10.5, depth: 0.02 }, this.scene);
    margin.position.set(-8.35, 0, 4.7);
    margin.material = this.marginMaterial;
  }

  private createClouds(): void {
    this.cloudMaterial = new StandardMaterial("cloud-ink", this.scene);
    this.cloudMaterial.diffuseColor = new Color3(0.78, 0.83, 0.87);
    this.cloudMaterial.emissiveColor = new Color3(0.42, 0.44, 0.47);
    this.cloudMaterial.specularColor = new Color3(0, 0, 0);
    this.cloudMaterial.alpha = 0.12;

    const placements = [
      { x: -6.2, y: 2.35, scale: 1.22, z: 3.8 },
      { x: 3.8, y: 2.75, scale: 0.92, z: 3.5 },
      { x: 6.1, y: -2.55, scale: 0.8, z: 3.7 },
    ];
    placements.forEach((placement, index) => {
      const group = new TransformNode(`cloud-group-${index}`, this.scene);
      group.position.set(placement.x, placement.y, 0);
      const puffs = [
        { x: -0.58, y: -0.06, size: 0.95 },
        { x: 0, y: 0.18, size: 1.22 },
        { x: 0.68, y: -0.03, size: 0.88 },
      ];
      puffs.forEach((puff, puffIndex) => {
        const cloud = MeshBuilder.CreateSphere(`cloud-${index}-${puffIndex}`, { diameter: 1, segments: 12 }, this.scene);
        cloud.parent = group;
        cloud.position.set(puff.x * placement.scale, puff.y * placement.scale, placement.z);
        cloud.scaling.set(puff.size * placement.scale * 1.35, puff.size * placement.scale * 0.62, 0.12);
        cloud.material = this.cloudMaterial;
      });
      this.cloudGroups.push(group);
    });
  }

  private createRain(): void {
    this.rainMaterial = new StandardMaterial("storm-rain", this.scene);
    this.rainMaterial.diffuseColor = new Color3(0.58, 0.77, 0.93);
    this.rainMaterial.emissiveColor = new Color3(0.1, 0.2, 0.3);
    this.rainMaterial.specularColor = new Color3(0, 0, 0);
    this.rainMaterial.alpha = 0;

    for (let index = 0; index < 24; index += 1) {
      const drop = MeshBuilder.CreateBox(`rain-${index}`, { width: 0.025, height: 0.62, depth: 0.018 }, this.scene);
      drop.position.set(-9.5 + ((index * 1.37) % 19), -4.8 + ((index * 2.17) % 9.6), 3.25);
      drop.rotation.z = -0.28;
      drop.material = this.rainMaterial;
      this.rainMeshes.push(drop);
    }
  }

  private createRunway(): void {
    this.runwayRoot = new TransformNode("landing-runway", this.scene);
    this.runwayMaterial = new StandardMaterial("runway-surface", this.scene);
    this.runwayMaterial.diffuseColor = new Color3(0.25, 0.29, 0.34);
    this.runwayMaterial.specularColor = new Color3(0, 0, 0);

    this.runwayGroundMaterial = new StandardMaterial("runway-ground", this.scene);
    this.runwayGroundMaterial.diffuseColor = new Color3(0.58, 0.48, 0.32);
    this.runwayGroundMaterial.specularColor = new Color3(0, 0, 0);

    this.runwayEdgeMaterial = new StandardMaterial("runway-edge", this.scene);
    this.runwayEdgeMaterial.diffuseColor = new Color3(0.2, 0.4, 0.68);
    this.runwayEdgeMaterial.emissiveColor = new Color3(0.08, 0.12, 0.18);
    this.runwayEdgeMaterial.specularColor = new Color3(0, 0, 0);

    this.runwayMarkMaterial = new StandardMaterial("runway-marks", this.scene);
    this.runwayMarkMaterial.diffuseColor = new Color3(0.96, 0.92, 0.72);
    this.runwayMarkMaterial.emissiveColor = new Color3(0.22, 0.2, 0.12);
    this.runwayMarkMaterial.specularColor = new Color3(0, 0, 0);

    this.runwayLightMaterial = new StandardMaterial("runway-lights", this.scene);
    this.runwayLightMaterial.diffuseColor = new Color3(1, 0.72, 0.16);
    this.runwayLightMaterial.emissiveColor = new Color3(0.8, 0.42, 0.05);
    this.runwayLightMaterial.specularColor = new Color3(0, 0, 0);

    this.runwayTowerMaterial = new StandardMaterial("runway-tower", this.scene);
    this.runwayTowerMaterial.diffuseColor = new Color3(0.82, 0.88, 0.92);
    this.runwayTowerMaterial.specularColor = new Color3(0, 0, 0);

    const ground = MeshBuilder.CreateBox("runway-ground-base", { width: 14.2, height: 1.25, depth: 0.88 }, this.scene);
    ground.parent = this.runwayRoot;
    ground.position.set(0, -4.18, 0.78);
    ground.material = this.runwayGroundMaterial;

    const surface = MeshBuilder.CreateBox("runway", { width: 13.2, height: 0.52, depth: 0.76 }, this.scene);
    surface.parent = this.runwayRoot;
    surface.position.set(0, -3.78, 0.32);
    surface.material = this.runwayMaterial;

    const upperEdge = MeshBuilder.CreateBox("runway-upper-edge", { width: 13.35, height: 0.09, depth: 0.06 }, this.scene);
    upperEdge.parent = this.runwayRoot;
    upperEdge.position.set(0, -3.47, -0.08);
    upperEdge.material = this.runwayEdgeMaterial;

    const lowerEdge = MeshBuilder.CreateBox("runway-lower-edge", { width: 13.35, height: 0.07, depth: 0.06 }, this.scene);
    lowerEdge.parent = this.runwayRoot;
    lowerEdge.position.set(0, -4.08, -0.08);
    lowerEdge.material = this.runwayEdgeMaterial;

    for (let index = 0; index < 9; index += 1) {
      const mark = MeshBuilder.CreateBox(`runway-mark-${index}`, { width: 0.66, height: 0.065, depth: 0.04 }, this.scene);
      mark.parent = this.runwayRoot;
      mark.position.set(-5.45 + index * 1.38, -3.42, -0.12);
      mark.material = this.runwayMarkMaterial;
    }

    for (let index = 0; index < 12; index += 1) {
      const light = MeshBuilder.CreateSphere(`runway-light-${index}`, { diameter: 0.16, segments: 8 }, this.scene);
      light.parent = this.runwayRoot;
      light.position.set(-6.1 + index * 1.1, -3.28, -0.18);
      light.material = this.runwayLightMaterial;
    }

    for (let index = 0; index < 5; index += 1) {
      const threshold = MeshBuilder.CreateBox(`runway-threshold-${index}`, { width: 0.12, height: 0.3, depth: 0.04 }, this.scene);
      threshold.parent = this.runwayRoot;
      threshold.position.set(-5.75 + index * 0.24, -3.75, -0.14);
      threshold.material = this.runwayMarkMaterial;
    }

    const tower = MeshBuilder.CreateBox("control-tower", { width: 0.82, height: 1.25, depth: 0.42 }, this.scene);
    tower.parent = this.runwayRoot;
    tower.position.set(5.2, -2.75, 0.25);
    tower.material = this.runwayTowerMaterial;

    const towerWindow = MeshBuilder.CreateBox("control-tower-window", { width: 0.62, height: 0.3, depth: 0.05 }, this.scene);
    towerWindow.parent = this.runwayRoot;
    towerWindow.position.set(5.2, -2.48, -0.03);
    towerWindow.material = this.runwayEdgeMaterial;

    const towerRoof = MeshBuilder.CreateCylinder("control-tower-roof", { height: 0.16, diameter: 1.14, tessellation: 3 }, this.scene);
    towerRoof.parent = this.runwayRoot;
    towerRoof.position.set(5.2, -2.04, 0.08);
    towerRoof.rotation.x = Math.PI / 2;
    towerRoof.material = this.runwayEdgeMaterial;

    const flagPole = MeshBuilder.CreateBox("runway-flag-pole", { width: 0.045, height: 1.05, depth: 0.04 }, this.scene);
    flagPole.parent = this.runwayRoot;
    flagPole.position.set(3.88, -2.88, 0.08);
    flagPole.material = this.runwayTowerMaterial;

    const flag = MeshBuilder.CreateDisc("runway-flag", { radius: 0.34, tessellation: 3 }, this.scene);
    flag.parent = this.runwayRoot;
    flag.position.set(4.12, -2.45, -0.06);
    flag.scaling.set(1.25, 0.62, 1);
    flag.rotation.z = Math.PI / 6;
    flag.material = this.runwayLightMaterial;

    this.runwayRoot.setEnabled(false);
  }
}
