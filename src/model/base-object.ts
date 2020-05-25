import { Velocity } from "./velocity";
import { Dimension } from './dimension';
import { AnimationController } from '../animation/animation-controller';
import { StateMachine } from '../state/state-machine';
import { WeaponEffect } from './weapon/weapon-effect';

export class BaseObject {
    protected x:number = 0;
    protected y:number = 0;
    protected dimension:Dimension = null;
    protected velocity: Velocity = new Velocity(0,0);
    protected alive:boolean = true;
    protected id:string = null;
    protected animation:AnimationController = null;
    protected dying:boolean = false;
    protected finished:boolean = false;
    protected hostile:boolean = false;
    protected points:number = 10; 

    protected stamina:number = 0;
    protected firePower:number = 1;

    protected stateMachine:StateMachine = null;//new PlayerStateMachine();
    protected weaponEffect:WeaponEffect = new WeaponEffect();

    public setX(x:number) {
        this.x = x;
    }

    public setY(y:number) {
        this.y = y;
    }    

    public getX():number {
        return this.x;
    }

    public getY():number {
        return this.y;
    }  

    public getId():string {
        return this.id;
    }  

    public setVelocity(velocity:Velocity) {
        this.velocity = velocity
        if (this.stateMachine!=null){
            return this.stateMachine.getState().setVelocity(velocity);
        }
    }

    public getDimension():Dimension{
        if (this.stateMachine!=null){
            return this.stateMachine.getState().getDimension();
        }
        return this.dimension;
    }
   
    public isAlive():boolean{
        if (this.stateMachine!=null){
            return this.stateMachine.getState().isAlive();
        }
        return this.alive;
    }

    public isDying():boolean{
        if (this.stateMachine!=null){
            return this.stateMachine.getState().isDying();
        }
        return this.dying;
    }

    public isFinished():boolean{
        if (this.stateMachine!=null){
            return this.stateMachine.getState().isFinished();
        }
        return this.finished;
    }

    public isHostile():boolean{
        return this.hostile;
    }

    public getWeaponEffect():WeaponEffect{
        if (this.stateMachine!=null){
            return this.stateMachine.getState().getWeaponEffect();
        }
        return this.weaponEffect;
    }

    public getPoints():number{
        return this.points;
    }

    public getStamina():number{
        return this.stamina;
    }

    public kill(){
        this.alive = false;
    }

    public setDimension(dimension:Dimension){
        this.dimension = dimension;
    }

    public move(){
        this.applyVelocity();
        if (this.getDimension()!=null){
            if (this.x + this.getDimension().getWidth() < 0){
                this.alive = false;
                this.finished = true;
            }
        }
    }

    
    protected applyVelocity() {
        if (this.stateMachine!=null){
            this.velocity = this.stateMachine.getState().getVelocity();
        }
        if (this.velocity != null) {
            this.x += this.velocity.getX();
            this.y += this.velocity.getY();
        }
    }

    public draw(ctx: CanvasRenderingContext2D):boolean{

        if (this.stateMachine!=null){
            return this.stateMachine.draw(this,ctx,this.x,this.y);
        }
        if (this.animation!=null){
            return this.animation.draw(ctx,this.x,this.y);
        }
        return true;

    }

    public getChilds():BaseObject[]{
        return null;
    }

    public collision(element: BaseObject){
        console.log("collision " + this.constructor.name);
        this.stamina-=element.firePower;
        if (this.stamina<0){
            this.alive = false;
            this.finished = true;
        }
    }
}
