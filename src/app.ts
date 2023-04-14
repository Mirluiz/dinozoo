import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import BuilderManager from "./builders";

class App {
  buildManager: BuilderManager = new BuilderManager();
  camera: THREE.Camera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  axis: THREE.AxesHelper = new THREE.AxesHelper(500);
  controls: OrbitControls;
  panel: HTMLElement = document.querySelector("#root") as HTMLElement;
  constructor() {
    this.renderer.setClearColor(0xffffff);

    this.renderer.setSize(this.panel.clientWidth, this.panel.clientHeight);
    this.panel.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      75,
      this.panel.clientWidth / this.panel.clientHeight,
      1,
      1000
    );
    // this.camera.up = new THREE.Vector3(0, -1, 0);
    this.camera.position.set(140, 140, 140);

    this.scene = new THREE.Scene();
    // this.scene.rotation.x = Math.PI;
    this.scene.background = new THREE.Color(0xf6eedc);
    this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.minDistance = 3;
    this.controls.maxDistance = 1000;
    this.controls.update();
    //
    // const spotLight = new THREE.SpotLight(0xffffff, 2);
    // spotLight.distance = 300;
    // spotLight.angle = 3;
    // spotLight.position.set(15, 40, 100);
    // this.scene.add(spotLight);

    const dirLight1 = new THREE.DirectionalLight( 0xffffff );
    dirLight1.position.set( 0, 1, 0 );
    dirLight1.intensity = 2;
    this.scene.add( dirLight1 );

    const lightHelper = new THREE.DirectionalLightHelper(dirLight1);
    this.scene.add(lightHelper);


    this.scene.add(this.axis);


  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  init() {
    this.buildManager.loadModels().then(() => {
      this.buildManager.isLoaded = true;
      this.initScene();
      this.animate();
    })
  }


  private initScene() {
    this.buildManager.build(this.scene);
  }

}


export default App;
