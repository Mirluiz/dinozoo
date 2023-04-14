import Fence from "./fence";
import Path from "./path";
import {Model} from "../models";
import Trex from "./dinos/trex";

export interface Builder {
  model: Model;
  build: (scene: THREE.Scene) => void;
}

class BuilderManager {
  isLoaded: boolean = false;
  builders: Array<Builder> = [];

  async loadModels() {
    this.builders = [
      new Path(),
      new Fence(),
      new Trex(),
    ];

    return Promise.all( this.builders.map((b) => {return b.model.load()}));
  }

  build(scene: THREE.Scene) {
    if(this.isLoaded){
      this.builders.map((b) => {
        b.build(scene);
      })
    }
  }

}

export default BuilderManager