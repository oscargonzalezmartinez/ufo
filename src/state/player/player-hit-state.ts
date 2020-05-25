import { State } from '../state';
import { OneShotAnimation } from '../../animation/one-shot-animation';
import { Dimension } from '../../model/dimension';
import { Velocity } from '../../model/velocity';
import { WeaponEffect } from '../../model/weapon/weapon-effect';
import { PlayerState } from './player-state';

export class PlayerHitState extends PlayerState{
    public static ID:string = "PlayerHitState";
    constructor(){
        super();
        this.id = PlayerHitState.ID;
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/explosion/exp2_0.png');
        this.animation = new OneShotAnimation(spriteImage,100,4,4, new Dimension(60,60));

        this.dying = true;
        this.weaponEffect = new WeaponEffect(false,false);
        this.velocity = new Velocity(0,0);
    }

    public draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        this.animation.draw(ctx,x,y);
        if (this.animation.isLastFrame()){
            return true;
        }
        return false;
    }
}
