import { Horde } from '../model/enemies/horde';
import { Level } from './level';
import { Enemy } from '../model/enemies/enemy';
import { LittleUFO } from '../model/enemies/little-ufo';

export class LevelOne extends Level{

    private static ENEMY_TYPE:Enemy = new LittleUFO();
    constructor (){
        super();
        this.initLevel();
       // this.setMaxHorde(2);
    }

    protected initLevel(){
        this.initHorde();
    }

    protected initHorde(){
        let horde = new Horde<Enemy>(LevelOne.ENEMY_TYPE,10,1);
        this.addHorde(horde);
    }

}
