
import { Velocity } from '../velocity';
import { Dimension } from '../dimension';
import { AnimationController } from '../../animation/animation-controller';
import { Bullet } from './bullet';
import { Universe } from '../universe';
import { Player } from '../player';

export class EnemyBlaster extends Bullet{

    constructor(){
        super();
    }

    public init(index:number){
        this.SPEED = -3;
        this.firePower = 3;

        this.setDimension(new Dimension(12,12));
        let spriteImage: string[] = new Array();
        //spriteImage.push('assets/blaster/blaster-1.png');
        spriteImage.push('assets/blaster/bullet-ball-1.png');

        this.animation = new AnimationController(spriteImage,0);
    }

    public initVelocity(){

        let vx:number = 0;//this.SPEED;
        let vy:number = 0;
        let player:Player = Universe.getPlayer();

      //  let angleRadians = Math.atan2(player.getX()-this.getX(), player.getY()- this.getY())
        var angle = Math.atan2(player.getX()-this.getX(), player.getY()- this.getY()) * 180 / Math.PI;
        //console.log(angleRadians + " " + angle);

    // angle in degrees
    if (angle<=0){
        vy = (90 + angle)/80;
        vx = -1 +vy;
    }
    else{
        vy = (angle -90)/-80;
        if (vy <=0){
            vx = 1 +vy;
        }
        else{
            vx = 1 - vy;
        }

    }    
   
        console.log(angle + " > " + vx + ", " + vy);
        this.setVelocity(new Velocity(vx *3 ,vy * 3));
    }

    public move(){
     //   this.initVelocity();
        super.move();
    }
}
