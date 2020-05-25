import { Horde } from '../model/enemies/horde';
import { Level } from './level';
import { Enemy } from '../model/enemies/enemy';
import { Wall } from '../model/enemies/terrain/wall';
import { EnemyBall } from '../model/enemies/enemy-ball';
import { Snake } from '../model/enemies/snake';

export class LevelSeven extends Level{

    private static ENEMY_TYPE:Enemy = new Wall();
    private static ENEMY_SNAKE:Enemy = new Snake(); 

    constructor (){
        super();
        this.initLevel();
       // this.setMaxHorde(2);
    }

    protected initLevel(){
       // this.initHorde(LevelSeven.ENEMY_TYPE.constructor.name);
        this.initHorde(LevelSeven.ENEMY_SNAKE.constructor.name);
    }

    protected initHorde(type:string){
        if (LevelSeven.ENEMY_TYPE.constructor.name == type){
            this.addHorde(new Horde<Enemy>(LevelSeven.ENEMY_TYPE,10,1));
        }

        if (LevelSeven.ENEMY_SNAKE.constructor.name == type){
            this.addHorde(new Horde<Enemy>(LevelSeven.ENEMY_SNAKE,1,2));
        }
        
    }
}