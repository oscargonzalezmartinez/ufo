import { Terrain } from '../model/enemies/terrain/terrain';
import { Level } from './level';
import { Horde } from '../model/enemies/horde';

export class LevelFour extends Level{
    private static ENEMY_TYPE:Terrain = new Terrain(); 
    constructor (){
       super(); 
       this.initLevel();
    }

    protected initLevel(){
        this.initHorde();
    }

    protected initHorde(){
        let horde = new Horde<Terrain>(LevelFour.ENEMY_TYPE,2,2);
        this.addHorde(horde);
    }
}
