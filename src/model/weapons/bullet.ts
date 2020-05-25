import { Enemy } from '../enemies/enemy';

export abstract class Bullet extends Enemy{

    public move(){
        this.x += this.velocity.getX();
        this.y += this.velocity.getY();
    }

    public initVelocity(){}
}
