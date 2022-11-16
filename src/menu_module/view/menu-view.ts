import {View} from "../../backbone_module/view";
import {ObserverC} from "../../util/observer/observer";
import {Sprite, Text} from "pixi.js";
import {MenuConstants} from "../constants/menu-constants";
import {Constants} from "../../misc/constants/constants";
import {TextureNames} from "../../misc/textures/menu-textures";
import {Events} from "../../misc/events/events";
import {StateMachine} from "../../util/state-machine/state-machine";
import {StateMachineStates} from "../../util/state-machine/state-machine-states";

export class MenuView extends View {
    protected button: Sprite;
    protected bigLabel: Text;

    constructor(observer: ObserverC) {
        super(observer);
        this.createBigLabel();
        this.createButton();

    }

    protected createBigLabel () {
        this.bigLabel = new Text(MenuConstants.bigLabel, {
            fontFamily: 'Open Sans SemiBold',
            fontSize: 70,
            align: 'center',
            fill: 0xffffff
        })
        this.bigLabel.anchor.set(0.5, 0.5);
        this.bigLabel.x = Constants.gameWidth / 2;
        this.bigLabel.y = Constants.gameHeight / 3;
        this.addChild(this.bigLabel);
    }

    // todo create animation on start button
    // todo make button put down on 3-5 px when we "press" it
    protected createButton () {
        this.button = Sprite.from(this.getTexture(TextureNames.Unique.START_BUTTON))
        this.button.anchor.set(0.5, 0.5);
        this.button.x = Constants.gameWidth / 2;
        this.button.y = Constants.gameHeight / 1.7;

        this.button.interactive = true;

        this.button.addListener(Events.click, this.startButtonHandler.bind(this));

        this.addChild(this.button);
    }

    protected startButtonHandler () {
        this.destroy();
        StateMachine.changeState(StateMachineStates.GAME);
    }
}
