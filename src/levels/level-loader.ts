import { Level } from './level';
import { LevelOne } from './level-one';
import { LevelTwo } from './level-two';
import { LevelThree } from './level-three';
import { LevelFour } from './level-four';
import { LevelFive } from './level-five';
import { LevelSix } from './level-six';
import { LevelSeven } from './level-seven';

export class LevelLoader {
    private numLevel:number=1;

    public next():Level{
        let level:Level = null;
//this.numLevel = 7;
        switch(this.numLevel){
            case 1: level = new LevelOne();
                break;
            case 2: level = new LevelTwo();
                break;
            case 3: level = new LevelThree();
                break;
            case 4: level = new LevelFour();
                break;
            case 5: level = new LevelFive();
                break;   
            case 6: level = new LevelSix();
                break;  
            case 7: level = new LevelSeven();
                break;                                                 
            default:
                level = new LevelOne();
                this.numLevel = 0;
        }

        this.numLevel++;
        return level;
    }
}
