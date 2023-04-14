import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Group} from "three/src/objects/Group";

class Trex {
  object: Group | null = null;

  async load() {
    const loader = new GLTFLoader();

    return new Promise(resolve => {
      loader.load(
        "models/allosaurus/scene.gltf",
         (gltf) => {
          resolve('');
          this.object = gltf.scene;
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.log("An error happened", error);
        }
      )
    });

  }
}

export default Trex
