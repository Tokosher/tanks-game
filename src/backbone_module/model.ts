import {Application} from "pixi.js";
import {MVCObserver} from "./mvc-observer";
import {ObserverC} from "../util/observer/observer";

/**
 * Todo разбить на прокси и ВО
 */
export class Model {
    protected observer: ObserverC;

    constructor(observer: ObserverC) {
        this.observer = observer;
    }

    protected addNotifications () {
        // add here Notifications and handlers
    }

    protected addNotification (notificationName: string, notificationHandler: (params: any) => void) {
        // add here to dictionary name of notif and handler
    }

    public notify(notification: string, params: object) {

    }
}
