import { State } from '../state';
import { BaseObject } from '../../model/base-object';
import { Velocity } from '../../model/velocity';
import { Dimension } from '../../model/dimension';
import { AnimationController } from '../../animation/animation-controller';


export class PlayerState extends State{
    public static ID:string = "PlayerStateRegular";
    constructor(){
        super();
        this.id = PlayerState.ID;
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/ship/f1.png');
        spriteImage.push('assets/ship/f2.png');
        spriteImage.push('assets/ship/f3.png');
        spriteImage.push('assets/ship/f4.png');
        this.animation = new AnimationController(spriteImage,125);
        this.velocity = new Velocity(5,0);
        this.dimension = new Dimension(64,29);
    }

    public collision(element:BaseObject):boolean{
        return true;
    }
}
