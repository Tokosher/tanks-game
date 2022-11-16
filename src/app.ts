import * as PIXI from 'pixi.js'
import {Observer} from "./util/observer/observer";
import {StateMachine} from "./util/state-machine/state-machine";
import {StateMachineStates} from "./util/state-machine/state-machine-states";
import {LoaderModule} from "./loader_module/loader-module";
import {MenuModule} from "./menu_module/menu-module";
import {Constants} from "./misc/constants/constants";
import {GameModule} from "./game_module/game-module";

// create and append app
const app = new PIXI.Application({
  width: Constants.gameWidth,
  height: Constants.gameHeight,
  backgroundColor: 0x112232,
  sharedTicker: true,
  sharedLoader: true,
});
document.body.appendChild(app.view);

export const App = app;

StateMachine.addState(StateMachineStates.INITIAL, {
  from: [],
  enter: () => {
    // todo create Observer and subscribe loading textures (textures into separate class)
    new LoaderModule();

  },
  exit: () => {}
})

StateMachine.addState(StateMachineStates.MENU, {
  from: [StateMachineStates.INITIAL], // todo add end of the game state
  enter: () => {
    new MenuModule();
  },
  exit: () => {}
})

StateMachine.addState(StateMachineStates.GAME, {
  from: [StateMachineStates.MENU], // todo add end of the game state
  enter: () => {
    // todo refactor modules to MVC and continue doing MapModule and other
    new GameModule();
    console.log('Define new game module');
  },
  exit: () => {}
})

StateMachine.initialState = StateMachineStates.INITIAL;
