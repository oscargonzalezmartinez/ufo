import { UniverseDimension } from '../../universe-dimension';
import { Weapon } from '../../weapons/weapon';
import { EnemyBlaster } from '../../weapons/enemy-blaster';
import { ArmedEnemy } from '../armed-enemy';
import { TankStateMachine } from '../../../state/enemy/tank-state-machine';

export class Tank extends ArmedEnemy{

    private static BULLET_TYPE:EnemyBlaster = new EnemyBlaster();

    constructor(){
        super();
    }
 
    protected getBulletType() {
        return Tank.BULLET_TYPE
    }
    public init(index:number) {
        this.hostile = true;
        this.SPEED = -2;
        this.stamina = 10;


        this.stateMachine = new TankStateMachine();

        this.initialPosition(index);
        this.weapon = new Weapon<EnemyBlaster>(15,2,100);
    }
 
    protected initialPosition(index:number){
        let x:number = (index * this.getDimension().getWidth()) + UniverseDimension.WIDTH + 1;
        this.setX(x);
        //this.setY(Random.getRandom(UniverseDimension.HEIGHT + this.getDimension().getHeight()));
        this.setY(UniverseDimension.HEIGHT/2);
    }
}
