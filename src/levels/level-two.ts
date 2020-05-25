import { Level } from './level';
import { Asteroid } from '../model/enemies/asteroid';
import { Horde } from '../model/enemies/horde';

export class LevelTwo extends Level{
    private static ENEMY_TYPE:Asteroid = new Asteroid();
    private enemyType:Asteroid = new Asteroid(); 
    constructor (){
       super(); 
       this.initLevel();

    }

    protected initLevel(){
        this.initHorde();
    }

    protected initHorde(){
        let horde = new Horde<Asteroid>(LevelTwo.ENEMY_TYPE,10,2);
        this.addHorde(horde);
    }

}
