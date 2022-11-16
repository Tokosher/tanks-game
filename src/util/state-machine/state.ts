export interface StateInterface {
    /**
     * From which state(s) this state can be switched
     */
    from: string[] | '*';

    /**
     * Callback, that will be executed, when we enter into current state
     */
    enter?: Function;

    /**
     * Callback, that will be executed, when we exit from current state
     */
    exit?: Function;
}

export class State implements StateInterface {
    public from: StateInterface['from'];
    public enter: StateInterface['enter'];
    public exit: StateInterface['exit'];

    constructor(data: StateInterface) {
        const { enter, exit } = data;
        let { from } = data;

        if (!from) {
            from = '*'; // that means we can switch from any state
        }
        this.from = from;
        this.enter = enter;
        this.exit = exit;
    }
}
