/**
 * Model logic
 * Расчёт сколько прогружать линию бара
 */
import {Model} from "../../backbone_module/model";
import {Application} from "pixi.js";
import {ObserverC} from "../../util/observer/observer";
import {LoaderConstants} from "../constants/loader-constants";

export class LoaderModel extends Model {
    constructor(observer: ObserverC) {
        super(observer);
    }
}
