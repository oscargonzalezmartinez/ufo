import { State } from '../state';
import { AnimationController } from '../../animation/animation-controller';
import { Dimension } from '../../model/dimension';
import { Velocity } from '../../model/velocity';
import { BaseObject } from '../../model/base-object';

export class LittleUfoState extends State{
    public static ID:string = "LittleUfoState";
    constructor(){
        super();
        this.id = LittleUfoState.ID;
        this.velocity = new Velocity(3, 0);
        this.dimension = new Dimension(40, 40);
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/enemy/example/e_f1.png');
        spriteImage.push('assets/enemy/example/e_f2.png');
        spriteImage.push('assets/enemy/example/e_f3.png');
        spriteImage.push('assets/enemy/example/e_f4.png');
        spriteImage.push('assets/enemy/example/e_f5.png');
        spriteImage.push('assets/enemy/example/e_f6.png');
        this.animation = new AnimationController(spriteImage, 125);
    }

    public collision(element:BaseObject):boolean{
        return true;
    }
}
