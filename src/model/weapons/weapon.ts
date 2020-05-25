import { Bullet } from './bullet';
import { Random } from '../../util/random';
import { BaseObject } from '../base-object';

export class Weapon<T extends Bullet> {
    private bullets :Map<number,Bullet> = new Map();  
    private lastFiredTime:number = new Date().getTime();
    constructor(protected maxBullet:number, protected minimuntimeBetweenBullet:number, protected probability:number){

    }

    private shouldFire():boolean{
        if (this.bullets.size >= this.maxBullet){
            return false;
        }

        if (Random.getRandom(99)>this.probability){
            return false;
        }

        return (new Date().getTime() - this.lastFiredTime ) > this.minimuntimeBetweenBullet * 1000;
    }

    public fire(parent:BaseObject,example:T){
        if (this.shouldFire()){
            let bullet:T = Object.create( example);
            bullet.init(0);
            bullet.setX(parent.getX() - bullet.getDimension().getWidth());
            bullet.setY(parent.getY() + parent.getDimension().getHeight() / 2);
            bullet.initVelocity();
            this.bullets.set(new Date().getTime(), bullet);
            this.lastFiredTime = new Date().getTime();
        }
    }
    
    public control(){
        this.bullets.forEach((bullet: T, key: number) => {
            if (!bullet.isAlive()){
                this.bullets.delete(key);
            }
            else if (bullet.getX() + bullet.getDimension().getWidth()<0){
                this.bullets.delete(key);
            }

        });
    }

    public getBullets():Array<Bullet>{
        let result:Bullet[] = new Array(this.bullets.size);
        this.bullets.forEach(element => {
            result.push(element);
        });

        return result;
    }
}
