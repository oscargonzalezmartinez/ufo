import { Enemy } from '../enemy';
import { Velocity } from '../../velocity';
import { Dimension } from '../../dimension';
import { AnimationController } from '../../../animation/animation-controller';
import { Tank } from '../tank/tank';
import { BaseObject } from '../../base-object';
import { UniverseDimension } from '../../universe-dimension';
import { WeaponEffect } from '../../weapon/weapon-effect';

export class Terrain extends Enemy{

    private tank:Tank = null;
    constructor(){
        super();
    }

    public init(index:number) {
        this.hostile = true;
        this.weaponEffect = new WeaponEffect(false,true);
        this.SPEED = -2;
        this.setVelocity(new Velocity(this.SPEED, 0));
        this.setDimension(new Dimension(174, 213));
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/enemy/terrain/terrain1.png');
        this.animation = new AnimationController(spriteImage, 0);
        this.initialPosition(index);
        this.tank = new Tank();
        this.tank.init(index);
        this.tank.setX(this.getX() +30);
        this.tank.setY(this.getY() + 20);
        this.tank.setVelocity(new Velocity(this.SPEED, 0));
    }

    protected initialPosition(index:number){
       // let x:number = (index * this.getDimension().getWidth()) + UniverseDimension.WIDTH + this.getDimension().getWidth() / 2;
       let x:number = (index * this.getDimension().getWidth() *2 ) + UniverseDimension.WIDTH - 100;
        this.setX(x);
        //this.setY(Random.getRandom(UniverseDimension.HEIGHT + this.getDimension().getHeight()));
        this.setY(index * this.getDimension().getHeight() + this.getDimension().getHeight() / 2);
    }

    public getChilds():BaseObject[]{
        let result:BaseObject[] = new Array();
        if (!this.tank.isFinished()){
            result.push(this.tank);
        }
        return result;
    }

    public collision(element:BaseObject){
        //no se destruye
    }
}
