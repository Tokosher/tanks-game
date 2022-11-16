export class StateMachineStates {
    public static POSTFIX: string = 'State';

    /**
     * We have this state while loading the game
     */
    public static INITIAL: string = `Initial${StateMachineStates.POSTFIX}`;

    /**
     * Main menu
     */
    public static MENU: string = `Menu${StateMachineStates.POSTFIX}`;

    /**
     * Game process
     */
    public static GAME: string = `Game${StateMachineStates.POSTFIX}`
}
