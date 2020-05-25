
import { BaseObject } from '../base-object';
import { UniverseDimension } from '../universe-dimension';

export class Star extends BaseObject{

    public draw( ctx: CanvasRenderingContext2D):boolean{
        ctx.fillStyle = 'rgb(255, 255, 220)';
        ctx.fillRect(this.x, this.y,2,2);
        return true;
    }

    public move(){
        if (this.x < 0 ){
            this.x = UniverseDimension.WIDTH;
        }
        super.move();
    }
}
