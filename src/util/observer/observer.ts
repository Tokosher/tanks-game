import {Backbone} from "../../backbone_module/backbone-module";

export class ObserverC {
    private _observers: Backbone[] = [];

    public subscribe(newSubscriber: any): void {
        if (this._observers.includes(newSubscriber)) {
            console.error('Subscriber already exist');
            return;
        }

        this._observers.push(newSubscriber);
    }

    public unsubscribe(existingSubscriber: any): void {
        const indexOfSubscriber = this._observers.indexOf(existingSubscriber);
        if (indexOfSubscriber === -1) {
            console.error('Subscriber does not exist');
            return;
        }

        this._observers.splice(indexOfSubscriber, 1);
    }

    public notify (notification: string, params?: object) {
        this._observers.forEach(subscriber => {
            subscriber.notify(notification, params);
        })
    }
}

export const Observer = new ObserverC();
