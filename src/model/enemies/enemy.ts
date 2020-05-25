import { BaseObject } from '../base-object';
import { AnimationController } from '../../animation/animation-controller';
import { UniverseDimension } from '../universe-dimension';


export abstract class Enemy extends BaseObject{

    protected moveFlag: number = 0;
    protected SPEED: number = -1;
    protected Y_SPEED: number = this.SPEED * -1;
    protected originalAnimation:AnimationController = null;

    constructor(){
        super();
        this.hostile = true;
    }

    public abstract init(index:number);

    protected initialPosition(index:number){
        this.setX(UniverseDimension.WIDTH + 1);
        this.setY(index * this.getDimension().getHeight());
    }

    public draw(ctx: CanvasRenderingContext2D):boolean{
        let moreAnimation:boolean = super.draw(ctx);
        return moreAnimation;
    }

    public collision(element:BaseObject){
        super.collision(element);
        if (this.stateMachine!=null){
            this.stateMachine.collision(this,element);
        }
    }
}
