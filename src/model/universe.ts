
import { BaseObject } from './base-object';
import { Player } from './player';
import { Velocity } from './velocity';
import { Keyboard } from '../util/keyboard';
import { CollisionDetector } from '../collision/collision-detector';
import { Background } from './background/background';
import { LivesEventListener } from '../event/lives-event-listener';
import { LivesEvent } from '../event/lives-event';
import { Level } from '../levels/level';
import { LevelLoader } from '../levels/level-loader';
import { UniverseDimension } from './universe-dimension';

export class Universe implements LivesEventListener{

    private static instance:Universe = null;
    public static newInstance(ctx: CanvasRenderingContext2D, keyboard: Keyboard, width:number, height:number){
        Universe.instance = new Universe(ctx,keyboard,width,height);
        return Universe.instance;
    }

    public static getPlayer():Player{
        return Universe.instance.player;
    }

    private theEnd:boolean = false;

    private player:Player = null;
    private background:Background = null;
    private collisionDetector:CollisionDetector = null;
    private levelLoader:LevelLoader = new LevelLoader();
    private level:Level = null;

    private lastTime:number = 0;
    private timeSum=0;
    private FPS_TARGET:number = 61;
    private TIME_PER_FRAME_TARGET:number = 1000/this.FPS_TARGET;

    constructor(private ctx: CanvasRenderingContext2D, private keyboard: Keyboard, width:number, height:number) {

        UniverseDimension.WIDTH = width;
        UniverseDimension.HEIGHT = height;

        this.level = this.levelLoader.next();
        this.background = new Background();
        this.collisionDetector = new CollisionDetector();
        this.initPlayer();
        this.player.suscribe(this.background.getHUD().getLivesCounter());
        this.player.suscribe(this);
        this.player.suscribePoints(this.background.getHUD().getPointsCounter());
   
    }    

    public start(){
        requestAnimationFrame((time: number) => { this.tick(time); });
    }

    private tick(time:number){
        this.timeSum=time - this.lastTime;
        if (this.timeSum > this.TIME_PER_FRAME_TARGET){

            this.timeSum = 0;
            this.move(this.ctx);
            this.lastTime = time;
        }
        
        requestAnimationFrame((time: number) => { this.tick(time); });

    }

    private initPlayer():Player{
        this.player = new Player(this.keyboard);
        this.player.setX(0);
        this.player.setY(UniverseDimension.HEIGHT / 2);
        this.player.setVelocity(new Velocity(2,0));
        return this.player;
    }

    receive(event:LivesEvent) {
        this.theEnd = event.getLives() == 0;

    }

    private draw(ctx: CanvasRenderingContext2D){
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.background.draw(ctx);
        this.drawLevel(this.level.getChilds(), ctx);
        this.player.draw(ctx);
  
        if (this.theEnd){
            ctx.font = "40px Arial";
            ctx.fillText("The End", UniverseDimension.WIDTH/2, UniverseDimension.HEIGHT/2 );
        }
    }

    private drawLevel(elements:BaseObject[],ctx: CanvasRenderingContext2D){
        if (elements!=null){
            elements.forEach(element => {
                element.draw(ctx);
                this.drawLevel(element.getChilds(),ctx);
            });
        }
    }

    private moveLevel(elements:BaseObject[]){
        if (elements!=null){
            elements.forEach(element => {
               // console.log("moveLevel " + element.constructor.name);
                element.move();
                this.moveLevel(element.getChilds());
            });
        }
    }
    public move(ctx: CanvasRenderingContext2D){
        this.background.move();
        this.player.move();
        this.moveLevel(this.level.getChilds());

        this.collisionDetector.detect(this.player, this.level.getChilds());
        this.draw(ctx);

        if (this.level.isFinished()){
            this.level = this.levelLoader.next();
        }
    }

}
