import {Controller} from "../../backbone_module/controller";
import {Model} from "../../backbone_module/model";
import {ObserverC} from "../../util/observer/observer";

export class MenuController extends Controller {
    constructor(model: Model, observer: ObserverC) {
        super(model, observer);
    }
}
