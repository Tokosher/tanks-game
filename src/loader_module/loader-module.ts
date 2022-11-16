import {Backbone} from "../backbone_module/backbone-module";
import {Application} from "pixi.js";
import * as PIXI from "pixi.js";
import { LoaderConstants } from "./constants/loader-constants";
import {Observer} from "../util/observer/observer";
import {StateMachine} from "../util/state-machine/state-machine";
import {StateMachineStates} from "../util/state-machine/state-machine-states";
import {LoaderTextures} from "../misc/textures/loader-textures";
import {LoaderView} from "./view/loader-view";
import {LoaderModel} from "./model/loader-model";
import {LoaderController} from "./controller/loader-controller";

/**
 * Сделать распределенную загрузку файлов по необходимости
 */
export class LoaderModule extends Backbone {

    constructor () {
        super();

        this.registerModel(new LoaderModel(this.observer));
        this.registerControllers(new LoaderController(this.model, this.observer))
        this.registerView(new LoaderView(this.observer));
    }
}
