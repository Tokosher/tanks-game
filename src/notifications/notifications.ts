export namespace GameNotifications {
    export class Loader {
        public static POSTFIX: string = '_loader_notification';
        public static ADD_LOADER_PROGRESS: string = `add_loader_progress${Loader.POSTFIX}`;
        public static LOADER_PROGRESS_BAR_ADDED: string = `loader_progress_bar_added${Loader.POSTFIX}`;
        public static COMPLETE_LOADING_ASSETS: string = `complete_loading_assets${Loader.POSTFIX}`;
    }

    export class Game {
        public static POSTFIX: string = '_game_notification';
        public static DRAW_MAP: string = `draw_map${Loader.POSTFIX}`;

    }
}
