import {default as Model} from '../models/fence';
import {Builder} from "./index";

class Fence implements Builder {
  model: Model = new Model();

  build(scene: THREE.Scene){
    if(!this.model.object)return;

    // this.model.object.rotation.x = Math.PI;
    // this.model.object.position.set(100, 100, 0);

    scene.add(this.model.object);
  }
}


export default Fence;