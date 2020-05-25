import { Level } from './level';
import { Horde } from '../model/enemies/horde';
import { Enemy } from '../model/enemies/enemy';
import { EnemyBall } from '../model/enemies/enemy-ball';
import { LittleUFO } from '../model/enemies/little-ufo';

export class LevelFive extends Level{
    private static ENEMY_BALL:Enemy = new EnemyBall(); 
    private static ENEMY_UFO:Enemy = new LittleUFO(); 
    constructor (){
       super(); 
       this.initLevel();
     }

    protected initLevel(){
        this.initHorde(LevelFive.ENEMY_UFO.constructor.name);
        this.initHorde(LevelFive.ENEMY_BALL.constructor.name);
    }

    protected initHorde(type:string){
        if (LevelFive.ENEMY_UFO.constructor.name == type){
            this.addHorde(new Horde<Enemy>(LevelFive.ENEMY_UFO,10,2));
        }

        if (LevelFive.ENEMY_BALL.constructor.name == type){
            this.addHorde(new Horde<Enemy>(LevelFive.ENEMY_BALL,10,2));
        }
        
    }
}