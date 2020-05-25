import { Velocity } from '../velocity';
import { Dimension } from '../dimension';
import { AnimationController } from '../../animation/animation-controller';
import { Random } from '../../util/random';
import { Enemy } from './enemy';
import { UniverseDimension } from '../universe-dimension';
import { WeaponEffect } from '../weapon/weapon-effect';

export class Asteroid extends Enemy {
 
    constructor(){
        super();
       // this.init(); parent call
    }

    public init(index:number) {
        this.weaponEffect = new WeaponEffect(false,false);
        this.hostile = true;
        this.SPEED = -1*(Random.getRandom(5)+1.25);
        console.log(this.constructor.name + " SPEED " + this.SPEED);
        this.setVelocity(new Velocity(this.SPEED, 0));
        this.setDimension(new Dimension(64, 64));

        let spriteImage: string[] = new Array();
        for (let i = 0; i < 60; i++) {
            spriteImage.push('assets/enemy/asteroid/Asteroid-A-10-' + i + '.png');
        }
        this.animation = new AnimationController(spriteImage, 125);
        this.animation.setInitialFrame(Random.getRandom(59));
        this.initialPosition(index);
    }

    protected initialPosition(index:number){
        this.setX(UniverseDimension.WIDTH + Random.getRandom(400));
        this.setY(Random.getRandom(UniverseDimension.HEIGHT - this.getDimension().getHeight()));
    }

    public collision(){
        console.log("collision " + this);
        //nunca muere
     //   this.alive = false;
    }
/*
    public restart(){
        this.setX(Universe.WIDTH + 1);
        this.setY(Random.getRandom(Universe.HEIGHT - this.getDimension().getHeight()));
    }
*/
    public move(){
        //super.move();
        this.applyVelocity();
        if (this.getX() + this.getDimension().getWidth() < 0){
            //this.restart();
            this.finished = true;
            this.alive = false;
        }
    }
}

