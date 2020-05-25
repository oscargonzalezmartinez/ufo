import { AnimationController } from './animation-controller';
import { Dimension } from '../model/dimension';

export class SpriteMapAnimation extends AnimationController{

    constructor(spriteList: string[], frameRate:number, protected columns:number, protected rows:number, private dimension:Dimension){
        super(spriteList,frameRate);
    }

    protected totalFrames():number{
        return  this.columns*this.rows;
    }
    public draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        let spriteNum = this.getFrame();
        let r = Math.floor(spriteNum / this.columns);
        let c = spriteNum - (r * this.columns);
        let origenX = c * this.dimension.getWidth();
        let origenY = r * this.dimension.getHeight();

        ctx.drawImage(this.spriteImage[0],origenX,origenY,this.dimension.getWidth(),this.dimension.getHeight(),x,y,this.dimension.getWidth(),this.dimension.getHeight());
        return true;
    }
}
