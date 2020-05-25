import { PointsEventListener } from 'src/event/points-event-listener';
import { PointsEvent } from 'src/event/points-event';
import { BaseObject } from '../base-object';

export class PointsCounter  extends BaseObject implements PointsEventListener{
    private totalPoints:number = 0;

    constructor(){
        super();
        this.x = 100;
        this.y = 20;
    }
    receive(event: PointsEvent) {
        this.totalPoints+=event.getPoints();
    }

    public draw(ctx: CanvasRenderingContext2D):boolean{
        ctx.font = "30px Arial";
        ctx.fillText("Points " + this.totalPoints, this.x, this.y); 
        return true;
    }
}
