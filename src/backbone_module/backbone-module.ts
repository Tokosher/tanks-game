import {Application, DisplayObject, Texture} from "pixi.js";
import {Observer, ObserverC} from "../util/observer/observer";
import {LoaderTextures} from "../misc/textures/loader-textures";
import {View} from "./view";
import {Model} from "./model";
import {Controller} from "./controller";
import {App} from "../app";

export class Backbone {
    protected views: View[] = [];
    protected controllers: Controller[] = [];
    protected model: Model;
    protected observer: ObserverC;

    constructor () {
        this.observer = new ObserverC();
        this.observer.subscribe(this);
    }

    protected registerControllers (controller: Controller) {
        if (this.controllers.includes(controller)) {
            console.error(`${controller.className} already exist in controllers handlers`);
            return;
        }

        this.controllers.push(controller);
    }

    protected registerView (view: View) {
        if (this.views.includes(view)) {
            console.error(`${view.className} already exist in view handlers`);
            return;
        }

        this.views.push(view);
    }

    protected registerModel (model: Model) {
        if (this.model) {
            console.error('Model already exist');
            return;
        }

        this.model = model;
    }

    public notify (notification: string, params: object) {
        this.model.notify(notification, params);
        this.controllers.forEach(controller => {
            controller.notify(notification, params);
        })
        this.views.forEach(view => {
            view.notify(notification, params);
        })
    }




















    // protected addNotification (notification: string, handler: (params: object) => void) {
    //     if (this._subscriptions[notification]) {
    //         console.error(`${notification} already exist`);
    //         return;
    //     }
    //
    //     this._subscriptions[notification] = handler;
    // }
    //
    // protected removeNotification (notification: string) {
    //     if (this._subscriptions[notification]) {
    //         delete this._subscriptions[notification];
    //         return;
    //     }
    //
    //     console.error(`Cannot remove notification ${notification}. It's does not exist`)
    // }
}
