import { BaseObject } from '../base-object';
import { LivesEventListener } from '../../event/lives-event-listener';
import { LivesEvent } from '../../event/lives-event';

export class LivesCounter extends BaseObject implements LivesEventListener{

    private lives: number = 0;
    constructor(){
        super();
        this.x = 0;
        this.y = 20;
    }

    receive(event: LivesEvent) {
        this.lives = event.getLives();
    }

    public move(){};

    public draw(ctx: CanvasRenderingContext2D):boolean{
        ctx.font = "30px Arial";
        ctx.fillText("Lives " + this.lives, this.x, this.y); 
        return true;
    }
}
