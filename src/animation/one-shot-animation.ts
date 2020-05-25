import { SpriteMapAnimation } from './sprite-map-animation';

export class OneShotAnimation extends SpriteMapAnimation{

    public draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        super.draw(ctx,x,y);
        let res =   !(this.frameCount == this.totalFrames() - 1 );
       return res;
    }

    public isLastFrame():boolean{
        return this.frameCount == this.totalFrames() - 1 ;
    }
}
