import { State } from '../state';
import { Velocity } from '../../model/velocity';
import { AnimationController } from '../../animation/animation-controller';
import { BaseObject } from '../../model/base-object';
import { Dimension } from '../../model/dimension';

export class EnemyBallState extends State{
    public static ID:string = "EnemyBallState";
    constructor(){
        super();
        this.velocity = new Velocity(-3, 0);
        this.dimension = new Dimension(64, 64);
        let spriteImage: string[] = new Array();
        for (let i:number = 1; i < 16; i++) {
            let indice:string = ""+i;
            if (i<10){
                indice = "0"+i
            }
            spriteImage.push('assets/enemy/alien100' + indice + '.png');
        }

        this.animation = new AnimationController(spriteImage, 50);
    }

    public collision(element:BaseObject):boolean{
        return true;
    }
}
