import {Application} from "pixi.js";
import {MVCObserver} from "./mvc-observer";
import {ObserverC} from "../util/observer/observer";
import {Model} from "./model";

export class Controller {
    public className: string = 'Controller';

    protected model: Model;
    protected observer: ObserverC;
    protected notificationHandlers: {[name: string]: (params: any) => void } = {};


    constructor(model: Model, observer: ObserverC) {
        this.model = model;
        this.observer = observer;

        this.addNotifications();
    }

    protected addNotifications () {
        // add here Notifications and handlers
    }

    protected addNotification (notificationName: string, notificationHandler: (params: any) => void) {
        this.notificationHandlers[notificationName] = notificationHandler;
    }

    protected sendNotification (notification: string, params?: object) {
        this.observer.notify(notification, params)
    }

    public notify(notification: string, params: object) {
        if (!(notification in this.notificationHandlers)) return;

        this.notificationHandlers[notification](params);
    }
}
