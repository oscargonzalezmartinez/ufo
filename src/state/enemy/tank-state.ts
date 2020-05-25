import { State } from '../state';
import { Dimension } from '../../model/dimension';
import { Velocity } from '../../model/velocity';
import { AnimationController } from '../../animation/animation-controller';

export class TankState extends State{
    public static ID:string = "TankState";
    constructor(){
        super();
        this.velocity = new Velocity(-0.5, 0);
        this.dimension  = new Dimension(131, 112);
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/enemy/tank/tank.png');

        this.animation = new AnimationController(spriteImage, 0);
    }
}
