import {State, StateInterface} from "./state";

type StatesType = { [name: string]: State }
class StateMachineC {
    /**
     * Current state, has a getter
     * @private
     */
    private _state: string;

    /**
     * Array of current states, that already added
     * @private
     */
    private _states: StatesType;

    constructor() {
        this._states = {};
    }

    public addState(stateName: string, stateData: StateInterface) {
        if (stateName in this._states) {
            console.error(`Already added ${stateName}`);
            return;
        }

        this._states[stateName] = new State(stateData);
    }

    public deleteState (stateName: string) {
        if (stateName in this._states) {
            (this._states[stateName] as State).from = undefined;
            (this._states[stateName] as State).enter = undefined;
            (this._states[stateName] as State).exit = undefined;
            this._states[stateName] = undefined;
        }
    }

    public get state(): string {
        return this._state;
    }

    public get states(): any {
        return this._states;
    }

    public getStateByName(name: string): State {
        return this._states[name];
    }

    public canChangeStateTo(stateName: string): boolean {
        return (
            stateName != this._state &&
            (this._states[stateName].from.indexOf(this._state) != -1 || this._states[stateName].from == '*')
        );
    }

    /**
     * Sets the initial state,
     * @param stateName
     */
    public set initialState(stateName: string) {
        if (this._state == undefined && stateName in this._states) {
            this._state = stateName;

            if (this._states[this._state].enter) {
                this._states[this._state].enter();
            }
            return;
        }

        console.error(`Trying to change state to ${stateName} (initial state), but state already defined: ${this._state}`);
    }

    public changeState(stateTo: string): void {
        // check if state is defined
        if (!(stateTo in this._states)) {
            console.error(`${stateTo} state is not defined!`);
            return;
        }

        // check if we can make this change state
        if (!this.canChangeStateTo(stateTo)) {
            console.error(`${stateTo} change state is denied. It's not allowed`);
            return;
        }
        const oldState = this._state;
        this._state = stateTo;

        // Dispatching callbacks for old and new state
        this._states[oldState]?.exit && this._states[oldState].exit();
        this._states[stateTo].exit && this._states[stateTo].enter();
    }
}

export const StateMachine = new StateMachineC();
