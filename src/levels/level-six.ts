import { Level } from './level';
import { Horde } from '../model/enemies/horde';
import { Enemy } from '../model/enemies/enemy';
import { EnemyBall } from '../model/enemies/enemy-ball';
import { LittleUFO } from '../model/enemies/little-ufo';
import { Asteroid } from '../model/enemies/asteroid';

export class LevelSix extends Level{
    private static ENEMY_BALL:Enemy = new EnemyBall(); 
    private static ENEMY_UFO:Enemy = new LittleUFO(); 
    private static ENEMY_ASTEROID:Enemy = new Asteroid(); 
    constructor (){
       super(); 
       this.initLevel();
     }

    protected initLevel(){
        this.initHorde(LevelSix.ENEMY_UFO.constructor.name);
        this.initHorde(LevelSix.ENEMY_BALL.constructor.name);
        this.initHorde(LevelSix.ENEMY_ASTEROID.constructor.name);
    }

    protected initHorde(type:string){
        if (LevelSix.ENEMY_UFO.constructor.name == type){
            this.addHorde(new Horde<Enemy>(LevelSix.ENEMY_UFO,10,2));
        }

        if (LevelSix.ENEMY_BALL.constructor.name == type){
            this.addHorde(new Horde<Enemy>(LevelSix.ENEMY_BALL,10,2));
        }
        
        if (LevelSix.ENEMY_ASTEROID.constructor.name == type){
            this.addHorde(new Horde<Enemy>(LevelSix.ENEMY_ASTEROID,10,2));
        }        
    }
}