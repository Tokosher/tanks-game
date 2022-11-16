import {Model} from "../../backbone_module/model";
import {ObserverC} from "../../util/observer/observer";
import {Sprite} from "pixi.js";

export class GameModel extends Model {
    public map: string[][] = []; // todo make protected and create notification to create it
    public blockHub: Sprite[][] = []; // todo make protected and create notification to create it

    constructor(observer: ObserverC) {
        super(observer);
    }
}
