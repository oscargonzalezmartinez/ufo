
import { Velocity } from '../velocity';
import { UniverseDimension } from '../universe-dimension';
import { Weapon } from '../weapons/weapon';
import { ArmedEnemy } from './armed-enemy';
import { Bullet } from '../weapons/bullet';
import { BulletBall } from '../weapons/bullet-ball';
import { EnemyBallStateMachine } from '../../state/enemy/enemy-ball-state-machine';


export class EnemyBall extends ArmedEnemy{
    private static BULLET_TYPE:BulletBall = new BulletBall();

    constructor(){
        super();
    }

    public init(index:number) {
        this.hostile = true;
        this.SPEED = -5;
        this.stateMachine = new EnemyBallStateMachine();
        this.initialPosition(index);
        this.initWeapon();
    }

    protected getBulletType():Bullet{
        return EnemyBall.BULLET_TYPE;
    }

    protected initWeapon(){
        this.weapon = new Weapon<BulletBall>(1,5,100);
    }

    protected initialPosition(index:number){
        let x:number = (index * this.getDimension().getWidth()) + UniverseDimension.WIDTH + 1;
        this.setX(x);
        //this.setY(Random.getRandom(UniverseDimension.HEIGHT + this.getDimension().getHeight()));
        this.setY(UniverseDimension.HEIGHT);
        console.log(this.constructor.name +".initialPosition " + index + " >> " + this.x + ","+this.y);
    }

    public move(){
        if (this.isDying()){
            this.Y_SPEED = 0;
            this.SPEED = -1;
        }
        else{
            this.moveFlag++;
            
            //https://gamedevelopment.tutsplus.com/tutorials/quick-tip-create-smooth-enemy-movement-with-sinusoidal-motion--gamedev-6009
            let dy:number = (UniverseDimension.HEIGHT - this.getDimension().getHeight())/2;
            let compensation:number = UniverseDimension.HEIGHT -  this.getDimension().getHeight()- dy;
            let newy = dy * (Math.sin(this.x * 0.5 * 3.1416 / 200));
            newy+=compensation;
            let vy = newy-this.y;
            //(Math.sin(this.x * 0.5 * 3.1416/350));// - UniverseDimension.HEIGHT /2 ;
  
            this.stateMachine.getState().setVelocity(new Velocity(-3, vy));
            //this.x += this.stateMachine.getState().getVelocity().getX(); 
            super.move();

            if (this.x + this.getDimension().getWidth() < 0){
                this.alive = false;
                this.finished = true;
            }
        }

    }

}
