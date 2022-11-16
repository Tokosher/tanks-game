import {View} from "../../backbone_module/view";
import {Model} from "../../backbone_module/model";
import {ObserverC} from "../../util/observer/observer";
import {GameNotifications} from "../../notifications/notifications";
import {Sprite, Texture} from "pixi.js";
import {TextureNames} from "../../misc/textures/menu-textures";
import {GameModel} from "../model/game-model";

// 25x19
export class MapView extends View {
    protected model: GameModel;

    constructor(observer: ObserverC, model?: Model) {
        super(observer, model);

    }

    protected addNotifications() {
        super.addNotifications();
        this.addNotification(GameNotifications.Game.DRAW_MAP, this.createBorder.bind(this))
    }

    protected createBorder (map: string[][] = []) {
        let x = 0;
        let y = 0;

        map.forEach((line, i) => {
            this.model.blockHub.push([]);

            line.forEach(blockType => {
                let block: Sprite;

                // todo в случае стены, нужно будет добавить массив из 4 элементов как стену
                // switch (blockType) {
                //     case TextureNames.Board.STONE_WALL:
                //         block = new Sprite(this.getTexture(TextureNames.Board.STONE_WALL));
                //         break;
                //
                //     case TextureNames.Tanks.ENEMY_RED:
                //         block = new Sprite(this.getTexture(TextureNames.Tanks.ENEMY_RED));
                //         break;
                // }

                if (blockType) {
                    block = new Sprite(this.getTexture(blockType));
                }

                if (block) {
                    block.x = x;
                    block.y = y;
                    this.addChild(block);
                    this.model.blockHub[i].push(block);
                } else {
                    this.model.blockHub[i].push(undefined);
                }


                x += 36;
            })

            y += 36
            x = 0;
        })
    }
}
