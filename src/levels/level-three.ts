import { Level } from './level';
import { EnemyBall } from '../model/enemies/enemy-ball';
import { Horde } from '../model/enemies/horde';

export class LevelThree extends Level{
    private static ENEMY_TYPE:EnemyBall = new EnemyBall(); 
    constructor (){
       super(); 
       this.initLevel();
    }

    protected initLevel(){
        this.initHorde();
    }

    protected initHorde(){
        let horde = new Horde<EnemyBall>(LevelThree.ENEMY_TYPE,8,2);
        this.addHorde(horde);
    }
}
