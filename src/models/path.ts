import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Group} from "three/src/objects/Group";
import {Model} from "./index";

class Path implements Model {
  object: Group | null = null;

  async load() {
    const loader = new GLTFLoader();

    return new Promise(resolve => {
      loader.load(
        "models/path2/path.gltf",
        // "models/path2/path.glb",
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

export default Path
