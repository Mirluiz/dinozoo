import Path from "./path";
import Fence from "./fence";
import {Group} from "three/src/objects/Group";

export interface Model {
  object: Group | null;
  load: () => Promise<unknown>;
}

class ModelManager {
  modelsLoaded: boolean = false;
  models: Array<Model> = [];

  async loadModels() {
    this.models = [
      new Path(),
      new Fence(),
    ];

    return Promise.all([this.models.map((model) => {return model.load()})]);
  }

  setModelsLoaded() {
    this.modelsLoaded = true;
  }
}

export default ModelManager