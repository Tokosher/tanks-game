export namespace TextureNames {
    export class Board {
        public static POSTFIX: string = '_board_texture';
        public static EAGLE: string = `eagle${Board.POSTFIX}`;
        public static LEAVES: string = `leaves${Board.POSTFIX}`;
        public static BIG_WALL: string = `big_wall${Board.POSTFIX}`;
        public static BRICK_WALL_TYPE1: string = `brick_wall_type1${Board.POSTFIX}`;
        public static BRICK_WALL_TYPE2: string = `brick_wall_type2${Board.POSTFIX}`;
        public static BRICK_WALL_TYPE3: string = `brick_wall_type3${Board.POSTFIX}`;
        public static BRICK_WALL_TYPE4: string = `brick_wall_type4${Board.POSTFIX}`;
        public static STONE_WALL: string = `STONE_WALL${Board.POSTFIX}`;
        public static WATER: string = `water${Board.POSTFIX}`;
    }

    export class Bonus {
        public static POSTFIX: string = '_bonus_texture';
    }

    export class LoaderBar {
        public static POSTFIX: string = '_loader_bar_texture';
    }

    export class Tanks {
        public static POSTFIX: string = '_tanks_texture';
        public static ENEMY_BLUE: string = `enemy_blue${Tanks.POSTFIX}`;
        public static ENEMY_RED: string = `enemy_red${Tanks.POSTFIX}`;
        public static ENEMY_WHITE: string = `enemy_white${Tanks.POSTFIX}`;
        public static TANK: string = `tank${Tanks.POSTFIX}`;

    }

    export class Unique {
        public static POSTFIX: string = '_unique_texture';
        public static START_BUTTON: string = `start_button${Unique.POSTFIX}`;
    }
}
