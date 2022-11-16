import {View} from "../../backbone_module/view";
import {Application} from "pixi.js";
import {ObserverC} from "../../util/observer/observer";
import {GameNotifications} from "../../notifications/notifications";
import * as PIXI from "pixi.js";
import {LoaderTextures} from "../../misc/textures/loader-textures";
import {App} from "../../app";

// TODO center loader
export class LoaderView extends View {
    constructor(observer: ObserverC) {
        super(observer);
    }

    protected addNotifications() {
        super.addNotifications();
        this.addNotification(GameNotifications.Loader.ADD_LOADER_PROGRESS, this.addLoaderProgress.bind(this))
        this.addNotification(GameNotifications.Loader.COMPLETE_LOADING_ASSETS, this.onComplete.bind(this))
    }

    protected addLoaderProgress () {
        const loaderBg = PIXI.Sprite.from(this.getTexture(LoaderTextures.loadingBackground)); // todo make class/func to take pictures from loader
        const loaderBar = PIXI.Sprite.from(this.getTexture(LoaderTextures.loadingBar));

        loaderBg.x = 50;
        loaderBg.y = 50;

        loaderBar.x = loaderBg.x + (loaderBg.width - loaderBar.width) / 2;
        loaderBar.y = loaderBg.y + (loaderBg.height - loaderBar.height) / 2;

        const initialLoaderBarWidth = loaderBar.width;
        loaderBar.width = 0;
        this.addChild(loaderBg);
        this.addChild(loaderBar);


        App.loader.onProgress.add(showProgress);
        function showProgress (e) {
            loaderBar.width = initialLoaderBarWidth / 100 * e.progress;
        }

        this.sendNotification(GameNotifications.Loader.LOADER_PROGRESS_BAR_ADDED);
    }

    protected onComplete () {
        this.destroy();
    }
}
