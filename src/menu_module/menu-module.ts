import {Backbone} from "../backbone_module/backbone-module";
import {MenuModel} from "./model/menu-model";
import {MenuController} from "./controller/menu-controller";
import {MenuView} from "./view/menu-view";

export class MenuModule extends Backbone {
    public constructor() {
        super();

        this.registerModel(new MenuModel(this.observer));
        this.registerControllers(new MenuController(this.model, this.observer));
        this.registerView(new MenuView(this.observer))

    }


}
