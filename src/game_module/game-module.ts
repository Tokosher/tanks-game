import {Backbone} from "../backbone_module/backbone-module";
import {GameModel} from "./model/game-model";
import {MapController} from "./controller/map-controller";
import {MapView} from "./view/map-view";

export class GameModule extends Backbone {
    constructor() {
        super();

        this.registerModel(new GameModel(this.observer));
        this.registerView(new MapView(this.observer, this.model))
        this.registerControllers(new MapController(this.model, this.observer))
    }
}
