import { BaseObject } from '../model/base-object';
import { AnimationController } from '../animation/animation-controller';
import { Velocity } from '../model/velocity';
import { Dimension } from '../model/dimension';
import { WeaponEffect } from '../model/weapon/weapon-effect';

export class State {

    protected id:string = null;
    protected alive:boolean = true;
    protected dying:boolean = false;
    protected finished:boolean = false;
    protected animation:AnimationController = null;
    protected velocity: Velocity = new Velocity(0,0);
    protected dimension: Dimension = null;

    protected weaponEffect:WeaponEffect = new WeaponEffect();

    protected intervalOfChange:number = -1;

    public outscreen(){
        this.alive = false;
        this.finished = true;
    }
    public isAlive():boolean{
        return this.alive;
    }

    public isDying():boolean{
        return this.dying;
    }

    public isFinished():boolean{
        return this.finished;
    }

    public getWeaponEffect():WeaponEffect{
        return this.weaponEffect;
    }

    public getAnimation():AnimationController{
        return this.animation;
    }

    public collision(element:BaseObject):boolean{
        return true;
    }

    public getVelocity():Velocity{
        return this.velocity;
    }

    public getDimension():Dimension{
        return this.dimension;
    }

    public getIntervalOfChange():number{
        return this.intervalOfChange;
    }
    
    public draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        this.animation.draw(ctx,x,y);
        return false;
    }

    public setVelocity(velocity:Velocity){
        this.velocity = velocity;   
    }
}

