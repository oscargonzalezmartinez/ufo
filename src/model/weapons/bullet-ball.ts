
import { Velocity } from '../velocity';
import { Dimension } from '../dimension';

import { Bullet } from './bullet';
import { AnimationController } from '../../animation/animation-controller';

export class BulletBall extends Bullet{

    constructor(){
        super();
    }

    public init(index:number){
        this.setVelocity(new Velocity(-5,0));
        this.setDimension(new Dimension(12,12));
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/blaster/bullet-ball-1.png');
        this.animation = new AnimationController(spriteImage,0);
    }
}
