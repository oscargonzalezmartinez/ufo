import { LivesCounter } from './lives-counter';
import { PointsCounter } from './points-counter';

export class HUD {

    private livesCounter:LivesCounter = new LivesCounter();
    private pointsCounter:PointsCounter = new PointsCounter();

    public draw( ctx: CanvasRenderingContext2D){
        this.livesCounter.draw(ctx);
        this.pointsCounter.draw(ctx);
    }

    public getLivesCounter():LivesCounter{
        return this.livesCounter;
    }

    public getPointsCounter():PointsCounter{
        return this.pointsCounter;
    }
}
