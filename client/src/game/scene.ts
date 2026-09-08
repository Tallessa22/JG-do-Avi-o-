import { Engine } from "@babylonjs/core/Engines/engine";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { Camera } from "@babylonjs/core/Cameras/camera";
import { Scene } from "@babylonjs/core/scene";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Texture } from "@babylonjs/core/Materials/Textures/texture";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { GameWorld, type GameState } from "./GameWorld";
import { InputManager, type JoystickState } from "./InputManager";
import { Player } from "./Player";

export type GameHandle = {
  scene: Scene;
  resize: () => void;
  restart: (fromBeginning?: boolean) => void;
  dispose: () => void;
};

type SceneOptions = {
  onStateChange?: (state: GameState) => void;
  onJoystickChange?: (state: JoystickState) => void;
};

export function createGameScene(engine: Engine, canvas: HTMLCanvasElement, options: SceneOptions = {}): GameHandle {
  const scene = new Scene(engine);
  scene.clearColor = new Color4(0.96, 0.94, 0.86, 1);
  const camera = new FreeCamera("notebook-camera", new Vector3(0, 0, -18), scene);
  camera.mode = Camera.ORTHOGRAPHIC_CAMERA;
  const resizeCamera = () => {
    const halfHeight = 5.05;
    const aspect = Math.max(1, canvas.clientWidth / Math.max(1, canvas.clientHeight));
    const halfWidth = Math.max(6.6, halfHeight * aspect);
    camera.orthoLeft = -halfWidth;
    camera.orthoRight = halfWidth;
    camera.orthoTop = halfHeight;
    camera.orthoBottom = -halfHeight;
  };
  resizeCamera();
  camera.setTarget(Vector3.Zero());
  scene.activeCamera = camera;

  const hemi = new HemisphericLight("paper-light", new Vector3(0, 1, -1), scene);
  hemi.intensity = 0.9;
  hemi.diffuse = new Color3(1, 0.97, 0.9);
  hemi.groundColor = new Color3(0.35, 0.4, 0.46);

  const isDemo = new URLSearchParams(window.location.search).has("demo");
  const planeMesh = new Mesh("paper-plane", scene);
  planeMesh.isPickable = false;
  planeMesh.scaling.set(0.94, 0.94, 1);

  const makeMaterial = (name: string, diffuse: Color3, emissive: Color3, alpha = 1) => {
    const material = new StandardMaterial(name, scene);
    material.diffuseColor = diffuse;
    material.emissiveColor = emissive;
    material.specularColor = new Color3(0, 0, 0);
    material.backFaceCulling = false;
    material.alpha = alpha;
    return material;
  };

  const paperPlaneTexture = new Texture(`${import.meta.env.BASE_URL}assets/paper-plane-kawaii.png`, scene);
  paperPlaneTexture.hasAlpha = true;
  const paperPlaneMaterial = new StandardMaterial("paper-plane-sprite-material", scene);
  paperPlaneMaterial.diffuseTexture = paperPlaneTexture;
  paperPlaneMaterial.useAlphaFromDiffuseTexture = true;
  paperPlaneMaterial.diffuseColor = Color3.White();
  paperPlaneMaterial.emissiveColor = Color3.White();
  paperPlaneMaterial.specularColor = Color3.Black();
  paperPlaneMaterial.backFaceCulling = false;
  paperPlaneMaterial.disableLighting = true;

  const paperPlaneSprite = MeshBuilder.CreatePlane(
    "paper-plane-sprite",
    { width: 2.28, height: 1.52, sideOrientation: Mesh.DOUBLESIDE },
    scene,
  );
  paperPlaneSprite.parent = planeMesh;
  // O novo desenho ja esta nivelado: o corpo e o bico ficam alinhados ao voo reto.
  paperPlaneSprite.position.set(-0.02, 0, -0.08);
  paperPlaneSprite.rotation.z = 0;
  paperPlaneSprite.material = paperPlaneMaterial;
  paperPlaneSprite.isPickable = false;

  const trailMaterial = makeMaterial(
    "paper-plane-trail",
    new Color3(0.18, 0.4, 0.73),
    new Color3(0.03, 0.06, 0.12),
    0.34,
  );
  const upperTrail = MeshBuilder.CreatePlane("paper-trail-upper", { width: 0.48, height: 0.025 }, scene);
  upperTrail.parent = planeMesh;
  upperTrail.position.set(-1.28, 0.08, 0.12);
  upperTrail.rotation.z = 0;
  upperTrail.material = trailMaterial;
  upperTrail.isPickable = false;
  const lowerTrail = upperTrail.clone("paper-trail-lower");
  lowerTrail.position.set(-1.36, -0.08, 0.12);
  lowerTrail.scaling.x = 0.72;

  const player = new Player(planeMesh);
  const world = new GameWorld(scene, player, (state) => options.onStateChange?.(state), isDemo);
  const input = new InputManager(
    canvas,
    (direction) => world.setDirection(direction),
    options.onJoystickChange,
  );
  let disposed = false;
  const observer = scene.onBeforeRenderObservable.add(() => {
    if (disposed) return;
    world.update(engine.getDeltaTime() / 1000);
  });

  return {
    scene,
    resize: resizeCamera,
    restart: (fromBeginning = false) => world.restartPhase(fromBeginning),
    dispose: () => {
      if (disposed) return;
      disposed = true;
      scene.onBeforeRenderObservable.remove(observer);
      input.dispose();
      world.dispose();
      paperPlaneMaterial.dispose();
      paperPlaneTexture.dispose();
      trailMaterial.dispose();
      planeMesh.dispose();
      scene.dispose();
    },
  };
}
