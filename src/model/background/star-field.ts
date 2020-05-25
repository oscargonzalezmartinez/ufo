import { Star } from './star';
import { Velocity } from "../velocity";
import { BaseObject } from '../base-object';
import { Random } from '../../util/random';
import { UniverseDimension } from '../universe-dimension';


export class StarField extends BaseObject{
    private stars: Star[] = null;
    private NUM_STARS: number = 150;
    constructor() {
        super();
        this.stars = new Array(this.NUM_STARS);
        console.log("Universe.HEIGHT " + UniverseDimension.HEIGHT);
        for (let index = 0; index <this.NUM_STARS; index++) {
            let star = new Star();
            star.setX(Random.getRandom(UniverseDimension.WIDTH));
            star.setY(Random.getRandom(UniverseDimension.HEIGHT));

            let yv = Random.getRandom(4)*0.25;
            if (yv==0){
                yv = 1;
            }
            star.setVelocity(new Velocity(yv*-1,0));
            this.stars[index] = star;
            
        }
    }

    public draw( ctx: CanvasRenderingContext2D):boolean{
        this.stars.forEach(star => {
            star.draw(ctx);
        });

        return true;
    }

    public move(){
        this.stars.forEach(star => {
            star.move();
        });
    }
}
