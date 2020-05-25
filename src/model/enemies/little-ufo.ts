import { Enemy } from './enemy';
import { Velocity } from '../velocity';
import { UniverseDimension } from '../universe-dimension';
import { LittleUfoStateMachine } from '../../state/enemy/little-ufo-state-machine';

export class LittleUFO extends Enemy{

    public init(index:number) {
        this.hostile = true;

        this.stateMachine = new LittleUfoStateMachine();
        this.initialPosition(index);
    }

    public move(){
        if (this.isDying()){
            this.Y_SPEED = 0;
            this.SPEED = -1;
        }
        else
        if (this.getY() < 0){
            this.Y_SPEED = this.SPEED * - 1;//bajamos
        }
        else if (this.getY() > UniverseDimension.HEIGHT - this.getDimension().getHeight()){
            this.Y_SPEED = this.SPEED;//subimos
        }

        this.stateMachine.setVelocity(new Velocity(this.SPEED,this.Y_SPEED));
        super.move();
        this.moveFlag++;

        if (this.x + this.getDimension().getWidth() < 0){
            this.alive = false;
            this.finished = true;
        }
    }
}
