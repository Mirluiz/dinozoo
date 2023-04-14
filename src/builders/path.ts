import * as THREE from 'three';
import {default as Model} from '../models/path';
import {Builder} from "./index";
import {Mesh} from "three";

class Path implements Builder {
  model: Model = new Model();

  build(scene: THREE.Scene){
    if(!this.model.object)return;

    this.model.object.rotation.z = Math.PI
    // this.model.object.position.set(100, 0, 200);

    scene.add(this.model.object);
  }
}


export default Path;