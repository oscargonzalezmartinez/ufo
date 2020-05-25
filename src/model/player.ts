import { BaseObject } from './base-object';
import { Keyboard } from '../util/keyboard';
import { Velocity } from './velocity';
import { Missile } from './missile';
import { LivesEventListener } from '../event/lives-event-listener';
import { LivesEvent } from '../event/lives-event';
import { UniverseDimension } from './universe-dimension';
import { PointsEventListener } from '../event/points-event-listener';
import { PlayerStateMachine } from '../state/player/player-state-machine';

export class Player extends BaseObject{

    private SPEED: number = 3;
    private life: number = 3;
    private missiles :Map<number,Missile> = new Map();    
    private MAX_MISSILE: number = 5;
    private lastFiredTime:number = new Date().getTime();

    private listeners:LivesEventListener[] = new Array();
    private pointsListener:PointsEventListener = null;

    constructor(private keyboard: Keyboard) {
        super();
        this.keyboard = keyboard;
        this.stateMachine = new PlayerStateMachine();
    }

    private update(){
        if (!this.isDying()){
            this.updatePlayerPosition();
        }
        this.controlFire();
    }

    private updatePlayerPosition() {
        let x: number = 0;
        let y: number = 0;
        if (this.keyboard.isLeft() && this.x > 0) {
            x = -1 * this.SPEED;
        }
        if (this.keyboard.isRight() && this.x < UniverseDimension.WIDTH - this.getDimension().getWidth() - this.SPEED) {
            x = this.SPEED;
        }
        if (this.keyboard.isUp() && this.y - this.SPEED > 0) {
            y = -1 * this.SPEED;
        }
        if (this.keyboard.isDown() && this.y < UniverseDimension.HEIGHT - this.getDimension().getHeight() - this.SPEED) {
            y = this.SPEED;
        }

        this.stateMachine.getState().setVelocity(new Velocity(x, y));
    }

    private controlFire(){
        let ti : number = new Date().getTime() - this.lastFiredTime;
        if (this.missiles.size < this.MAX_MISSILE && this.keyboard.isSpace() && ti > 250){
            this.lastFiredTime = new Date().getTime();
            let id:number = this.lastFiredTime;
            let missile:Missile = new Missile(id);
            if (this.getDimension() == null){
                console.log (this.constructor.name + " controlFire " + this.stateMachine.getState());
            }
            missile.setX(this.x + this.getDimension().getWidth());
            missile.setY(this.y + this.getDimension().getHeight() / 2);
            if (this.pointsListener!=null){
                missile.suscribe(this.pointsListener);
            }
            this.missiles.set(id, missile);
        }   

        this.missiles.forEach((missile: Missile, key: number) => {
            if (!missile.isAlive()){
                this.missiles.delete(key);
                missile = null;
            }
            else if (missile.getX()>UniverseDimension.WIDTH+1){
                missile.kill();
                this.missiles.delete(key);
                missile = null;
            }

        });

    }

    public move(){
        this.update();
        this.missiles.forEach(missile => {
            missile.move();
        });

        super.move();
    }

    public draw( ctx: CanvasRenderingContext2D):boolean{
        let res = super.draw(ctx);
        this.missiles.forEach(missile => {
            missile.draw(ctx);
        });

        /*
        if (this.dying && !res){
            this.initStandarAnimation();
            this.dying = false;
        }*/
        return true;
    }

    public getChilds():BaseObject[]{
        let result:BaseObject[] = new Array(this.missiles.size);
        let index:number =0;
        this.missiles.forEach(element => {
            result[index] = element;
            index++;
        });
        return result;
    }

    public suscribe(listener:LivesEventListener){
        this.listeners.push(listener);
        this.emitLifeCount();
    }

    private emitLifeCount() {
        this.listeners.forEach(listener => {
            listener.receive(new LivesEvent(this.life));
        });
    }

    public suscribePoints(listener: PointsEventListener){
        this.pointsListener = listener;
    }

    public collision(element: BaseObject){
        super.collision(element);
        this.life--;
        if (this.life > 0){
            this.alive = true;
        }
        this.emitLifeCount();

        this.stateMachine.collision(this, element);
        /*
        this.initExplosionAnimation();
        this.dying = true;

        this.setVelocity(new Velocity(1, 0));
        */
    }
}
