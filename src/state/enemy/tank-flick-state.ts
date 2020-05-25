import { State } from '../state';
import { Velocity } from '../../model/velocity';
import { Dimension } from '../../model/dimension';
import { FlickAnimation } from '../../animation/flick-animation';
import { StateTransitionFunction } from '../state-transition-function';
import { BaseObject } from '../../model/base-object';
import { WeaponEffect } from '../../model/weapon/weapon-effect';

export class TankFlickState extends State implements StateTransitionFunction{
    public static ID:string = "TankFlickState";
    constructor(){
        super();

        this.weaponEffect = new WeaponEffect(false,false);
        this.intervalOfChange = 1000;
        this.velocity = new Velocity(-2, 0);
        this.dimension  = new Dimension(131, 112);
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/enemy/tank/tank.png');
        this.animation = new FlickAnimation(spriteImage, 0);
    }

    public draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        this.animation.draw(ctx,x,y);
        return this.animation.isLastFrame();
    }

    changeState(element:BaseObject):boolean{
        console.log(this.constructor.name  + " stamina " + element.getStamina());
        return element.getStamina()<1;
    }
}
