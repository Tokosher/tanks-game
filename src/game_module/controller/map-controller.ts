import {Controller} from "../../backbone_module/controller";
import {ObserverC} from "../../util/observer/observer";
import {GameModel} from "../model/game-model";
import {Constants} from "../../misc/constants/constants";
import {GameNotifications} from "../../notifications/notifications";
import {TextureNames} from "../../misc/textures/menu-textures";
import {Model} from "../../backbone_module/model";

export class MapController extends Controller {
    protected model: GameModel;

    constructor(model: Model, observer: ObserverC) {
        super(model, observer);

        this.calculateMapPositions();
        this.sendNotification(GameNotifications.Game.DRAW_MAP, this.model.map);
    }

    // todo сделать частичное разрушение стенки из кирпичей (1 удар - 1\4 блока разрушена)
    protected calculateMapPositions () {
        for (let i = 0; i < Constants.blocksAmountHeight; i++) {
            this.model.map.push([]);

            for (let j = 0; j < Constants.blocksAmountWidth; j++) {

                // creating board
                if (
                    i === 0
                    || i === Constants.blocksAmountHeight - 1
                    || j === 0
                    || j === Constants.blocksAmountWidth - 1
                ) {
                    this.model.map[i][j] = TextureNames.Board.STONE_WALL;
                    continue;
                }

                // add additional stone blocks to map
                if (
                    i === 10
                    && (
                        j === 1
                        || j === 2
                        || j === 22
                        || j === 23
                    )
                ) {
                    this.model.map[i][j] = TextureNames.Board.STONE_WALL;
                    continue;
                }

                if (
                    i === 4 && j === 12
                ) {
                    this.model.map[i][j] = TextureNames.Board.STONE_WALL;
                    continue;
                }

                // creating enemy
                if (i === 1 && (j === 1 || j === 12 || j === 23)) {
                    this.model.map[i][j] = TextureNames.Tanks.ENEMY_RED; // todo add other enemies
                    continue;
                }

                // creating bricks walls
                if ((
                    j === 2
                    || j === 3
                    || j === 6
                    || j === 7

                    || j === 17
                    || j === 18
                    || j === 21
                    || j === 22
                ) && (
                    i === 2
                    || i === 3
                    || i === 4
                    || i === 5
                    || i === 6
                    || i === 7

                    || i === 12
                    || i === 13
                    || i === 14
                    || i === 15
                    || i === 16
                    || i === 17
                )) {
                    this.model.map[i][j] = TextureNames.Board.BIG_WALL;
                    continue;
                }

                if ((
                    j === 10
                    || j === 11
                    || j === 13
                    || j === 14

                ) && (
                    i === 2
                    || i === 3
                    || i === 4
                    || i === 5

                    || i === 7
                    || i === 8

                    || i === 10
                    || i === 11
                    || i === 12
                    || i === 13
                    || i === 14
                )) {
                    this.model.map[i][j] = TextureNames.Board.BIG_WALL; // TODO start using block 18x18
                    continue;
                }

                // add additional bricks blocks to map
                if (
                    i === 9
                    && (
                        j === 1
                        || j === 2
                        || j === 22
                        || j === 23
                    )
                ) {
                    this.model.map[i][j] = TextureNames.Board.BIG_WALL;
                    continue;
                }

                if (
                    (
                        i === 9
                        || i === 10
                    )
                    && (
                        j === 4
                        || j === 5
                        || j === 6
                        || j === 7

                        || j === 17
                        || j === 18
                        || j === 19
                        || j === 20
                    )
                ) {
                    this.model.map[i][j] = TextureNames.Board.BIG_WALL;
                    continue;
                }

                if (
                    i === 11 && j === 12
                ) {
                    this.model.map[i][j] = TextureNames.Board.BIG_WALL;
                    continue;
                }

                // create tank
                if (i === 16 && j === 12 ) {
                    this.model.map[i][j] = TextureNames.Tanks.TANK; // todo add other enemies
                    continue;
                }

                // create base
                if (
                    (i === 17 && (
                        j === 11
                        || j === 12
                        || j === 13
                    ))
                    || (i === 18 && (
                        j === 11
                        || j === 13
                    ))
                ) {
                    this.model.map[i][j] = TextureNames.Board.BIG_WALL;
                    continue;
                }

                // create eagle
                if (i === 18 && j === 12) {
                    this.model.map[i][j] = TextureNames.Board.EAGLE;
                    continue;
                }

                this.model.map[i][j] = '';
            }
        }
    }
}
