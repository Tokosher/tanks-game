/**
 * Subscribing Model View and Controller
 */
import {ObserverC} from "../util/observer/observer";

export class MVCObserver {
    protected observer: ObserverC;

    constructor(props) {
        this.observer = new ObserverC();
        this.observer.subscribe(this);
    }

    protected sendNotification (notification: string, params: object) {
        this.observer.notify(notification, params)
    }

    protected notify (notification: string, params: object) {}
}
