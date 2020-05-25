import { Enemy } from './enemy';
import { AnimationController } from '../../animation/animation-controller';
import { Dimension } from '../dimension';
import { Velocity } from '../velocity';
import { WeaponEffect } from '../weapon/weapon-effect';
import { UniverseDimension } from '../universe-dimension';
import { Player } from '../player';
import { Universe } from '../universe';

export class SnakeNode extends Enemy{

    private defaultStep:number = 60;

    public init(index:number) {
        this.weaponEffect = new WeaponEffect();
        this.hostile = true;
        this.SPEED = -2;//-1*(Random.getRandom(5)+1.25);

        this.setVelocity(new Velocity(this.SPEED, 0));
        this.setDimension(new Dimension(69, 69));

        let spriteImage: string[] = new Array();
        spriteImage.push('assets/blaster/mine-big.png');
        this.animation = new AnimationController(spriteImage, 125);
        //this.animation.setInitialFrame(Random.getRandom(59));
        this.initialPosition(index);
    }

    protected initialPosition(index:number){
        let x:number = (index * this.getDimension().getWidth()/2 ) + UniverseDimension.WIDTH - 100;
        this.setX(x);
       // this.setY(index * this.getDimension().getHeight() + this.getDimension().getHeight() / 2);
       this.setY(this.getDimension().getHeight() + this.getDimension().getHeight() / 2);
    }
    
    public move(){
        if (this.isDying()){
            this.Y_SPEED = 0;
            this.SPEED = -1;
        }
        else{
            this.moveFlag++;

            let vy : number = 0;
            let vx:number = this.SPEED;
            let player:Player = Universe.getPlayer();



            //https://gamedevelopment.tutsplus.com/tutorials/quick-tip-create-smooth-enemy-movement-with-sinusoidal-motion--gamedev-6009
            let dy:number = (UniverseDimension.HEIGHT - this.getDimension().getHeight())/2;
            let compensation:number = UniverseDimension.HEIGHT -  this.getDimension().getHeight()- dy;
            //let newy = dy * (Math.sin(this.x * 0.2 * 3.1416 / 290));
            let newy = this.defaultStep * (Math.sin(this.x * 8 * 3.1416 / 1590));
           newy+= player.getY() - this.defaultStep ;
            
            vy = newy-this.y;

          this.setVelocity(new Velocity(vx, vy));
            super.move();

            if (this.x + this.getDimension().getWidth() < 0){
                this.alive = false;
                this.finished = true;
            }
        }

    }
}