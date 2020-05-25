import { State } from '../state';
import { OneShotAnimation } from '../../animation/one-shot-animation';
import { Dimension } from '../../model/dimension';
import { Velocity } from '../../model/velocity';

export class EnemyHitState extends State{
    public static ID:string = "EnemyHitState";
    
    constructor(){
        super();
        this.dying = true;
        this.alive = false;
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/explosion/exp2_0.png');
        this.velocity = new Velocity(-1,0);
        this.dimension = new Dimension(60,60);
        this.animation = new OneShotAnimation(spriteImage,160,4,4, this.dimension);
    }

    public draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        this.animation.draw(ctx,x,y);
        if (this.animation.isLastFrame()){
            this.finished = true;
            return true;
        }
        return false;
    }
}
