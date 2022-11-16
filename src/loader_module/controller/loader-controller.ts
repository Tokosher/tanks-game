/**
 * Controller logic
 * Handle click of user
 */
import {Controller} from "../../backbone_module/controller";
import {Application} from "pixi.js";
import {Model} from "../../backbone_module/model";
import {App} from "../../app";
import {LoaderConstants} from "../constants/loader-constants";
import {LoaderTextures} from "../../misc/textures/loader-textures";
import * as PIXI from "pixi.js";
import {ObserverC} from "../../util/observer/observer";
import {GameNotifications} from "../../notifications/notifications";
import {StateMachine} from "../../util/state-machine/state-machine";
import {StateMachineStates} from "../../util/state-machine/state-machine-states";
import {Tanks, TextureNames} from "../../misc/textures/menu-textures";

export class LoaderController extends Controller {
    constructor(model: Model, observer: ObserverC) {
        super(model, observer);

        this.defineBaseUrl();
        this.loadPreloaderAssets(() => {
            this.sendNotification(GameNotifications.Loader.ADD_LOADER_PROGRESS)
        });
    }

    protected addNotifications() {
        super.addNotifications();
        this.addNotification(GameNotifications.Loader.LOADER_PROGRESS_BAR_ADDED, this.loadMandatoryAssets.bind(this))
    }

    /**
     * Сделать загрузку по необходимости текстур
     * @protected
     */
    protected loadMandatoryAssets (): void {
        this.loadTexture(TextureNames.Board.EAGLE, 'board/eagle.png');
        this.loadTexture(TextureNames.Board.LEAVES, 'board/leaves.png');
        this.loadTexture(TextureNames.Board.BIG_WALL, 'board/big_wall.png');
        this.loadTexture(TextureNames.Board.BRICK_WALL_TYPE1, 'board/small_wall_1.png');
        this.loadTexture(TextureNames.Board.BRICK_WALL_TYPE2, 'board/small_wall_2.png');
        this.loadTexture(TextureNames.Board.BRICK_WALL_TYPE3, 'board/small_wall_3.png');
        this.loadTexture(TextureNames.Board.BRICK_WALL_TYPE4, 'board/small_wall_4.png');
        this.loadTexture(TextureNames.Board.STONE_WALL, 'board/wall.png');
        this.loadTexture(TextureNames.Board.WATER, 'board/water.png');

        this.loadTexture(TextureNames.Tanks.ENEMY_BLUE, 'tanks/enemy_blue.png');
        this.loadTexture(TextureNames.Tanks.ENEMY_RED, 'tanks/enemy_red.png');
        this.loadTexture(TextureNames.Tanks.ENEMY_WHITE, 'tanks/enemy_white.png');
        this.loadTexture(TextureNames.Tanks.TANK, 'tanks/tank.png');




        // need for next scene
        this.loadTexture(TextureNames.Unique.START_BUTTON, 'button.png');

        // this.loadTexture('eagle', 'board/eagle.png');
        // this.loadTexture('leaves', 'board/leaves.png');
        // this.loadTexture('small_wall_1', 'board/small_wall_1.png');
        // this.loadTexture('small_wall_2', 'board/small_wall_2.png');
        // this.loadTexture('small_wall_3', 'board/small_wall_3.png');
        // this.loadTexture('small_wall_4', 'board/small_wall_4.png');
        // this.loadTexture('wall', 'board/wall.png');
        // this.loadTexture('water', 'board/water.png'); todo load when need it

        App.loader.onComplete.add(this.onComplete.bind(this));

        App.loader.load()
    }

    protected defineBaseUrl (): void {
        App.loader.baseUrl = LoaderConstants.baseUrl;
    }

    protected loadPreloaderAssets (cb: () => void): void {
        this.loadTexture(LoaderTextures.loadingBar, 'loader-bar/loader-bar.png');
        this.loadTexture(LoaderTextures.loadingBackground, 'loader-bar/loader-bg.png');
        App.loader.load(cb);
    }

    protected loadTexture (name: string, url: string) {
        App.loader.add(name, url);
    }

    protected onComplete () {
        this.sendNotification(GameNotifications.Loader.COMPLETE_LOADING_ASSETS);
        StateMachine.changeState(StateMachineStates.MENU);
    }
}
