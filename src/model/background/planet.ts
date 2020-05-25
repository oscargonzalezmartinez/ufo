import { BaseObject } from '../base-object';
import { Velocity } from '../velocity';
import { Dimension } from '../dimension';
import { Random } from '../../util/random';
import { UniverseDimension } from '../universe-dimension';
import { AnimationController } from '../../animation/animation-controller';

export class Planet extends BaseObject{

    private spriteImage: any = new Image();
    constructor(){
        super();
        this.setVelocity(new Velocity(-0.25,0));
        this.setDimension(new Dimension(300,300));
        this.loadImage();
    }

    private loadImage(){
        let spriteImage: string[] = new Array();
        spriteImage.push('assets/backgrounds/planets/planet'+(Random.getRandom(17) + 1)+'.png');
        this.animation = new AnimationController(spriteImage,125);
        this.x = UniverseDimension.WIDTH + 1;
        this.y = Random.getRandom(UniverseDimension.HEIGHT - 20);
    }

    public move(){
        if (this.getX() + this.getDimension().getWidth() < 0){
            this.x = UniverseDimension.WIDTH + 10;
            this.loadImage();
        }
        super.move();
    }
}
