import {Application, DisplayObject, Texture} from "pixi.js";
import {MVCObserver} from "./mvc-observer";
import {ObserverC} from "../util/observer/observer";
import {Controller} from "./controller";
import {App} from "../app";
import {Model} from "./model";

export class View {
    public className: string = 'View';

    protected observer: ObserverC;
    protected model: Model;

    protected notificationHandlers: {[name: string]: (params: any) => void } = {};

    constructor(observer: ObserverC, model?: Model) {
        this.observer = observer;
        this.model = model;
        this.addNotifications()
    }

    protected addNotifications () {
        // add here Notifications and handlers
    }

    protected addNotification (notificationName: string, notificationHandler: (params: any) => void) {
        this.notificationHandlers[notificationName] = notificationHandler;
    }

    protected sendNotification (notificationName: string, params?: object) {
        this.observer.notify(notificationName, params)
    }

    public notify(notification: string, params: object) {
        if (!(notification in this.notificationHandlers)) return;

        this.notificationHandlers[notification](params);
    }

    protected getTexture (name: string): Texture {
        return App.loader.resources[name].texture
    }

    protected addChild (child: DisplayObject) {
        App.stage.addChild(child);
    }

    protected destroy () {
        App.stage.removeChildren(0);
    }
}
