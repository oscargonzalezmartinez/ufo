import { BaseObject } from './base-object';
import { Velocity } from './velocity';
import { Dimension } from './dimension';
import { PointsEventListener } from '../event/points-event-listener';
import { PointsEvent } from '../event/points-event';
import { AnimationController } from '../animation/animation-controller';

export class Missile extends BaseObject{
    private SPEED: number = 10;
    private pointsListeners:PointsEventListener[] = new Array();
    public suscribe(listener: PointsEventListener){
        this.pointsListeners.push(listener);
        //this.emitLifeCount();
    }
    constructor(iden:number) {
        super();
        this.setVelocity(new Velocity(this.SPEED,0));
        this.setDimension(new Dimension(10,3));
        this.id="Missile#"+iden;
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/ship/fire1.png');

        this.animation = new AnimationController(spriteImage,0);
    }

    public draw( ctx: CanvasRenderingContext2D):boolean{
        this.animation.draw(ctx,this.getX(),this.getY());
        return true;
    }

    public collision(element: BaseObject){
        if (!element.getWeaponEffect().isBulletPassThrough()){
            this.alive = false;
        }
 
        if (element.getWeaponEffect().isAfectedByWeapons()){
            console.log(this.id + " missile colision ");
            this.alive = false;
            if (element.getPoints()>0){//TODO en elementos que soportan más de un disparo no sumar
                this.emitPointsCount(element.getPoints());
            }
        }
    }

    private emitPointsCount(points:number) {
        this.pointsListeners.forEach(listener => {
            listener.receive(new PointsEvent(points));
        });
    }
}


