import { Enemy } from '../enemy';
import { Velocity } from '../../velocity';
import { Dimension } from '../../dimension';
import { AnimationController } from '../../../animation/animation-controller';
import { WeaponEffect } from '../../weapon/weapon-effect';
import { UniverseDimension } from '../../universe-dimension';

export class Wall extends Enemy{


    constructor(){
        super();
    }

    public init(index:number) {
        this.hostile = true;
        this.weaponEffect = new WeaponEffect(false,true);
        this.SPEED = -0.2;
        this.setVelocity(new Velocity(this.SPEED, 0));
        this.setDimension(new Dimension(352, 224));
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/environment/bulkhead-walls-back.png');
        this.animation = new AnimationController(spriteImage, 0);
        this.initialPosition(index);

    }

    protected initialPosition(index:number){
        
        this.setX(index * this.getDimension().getWidth() + this.getDimension().getWidth());
        this.setY(UniverseDimension.HEIGHT - this.getDimension().getHeight());
    }
}