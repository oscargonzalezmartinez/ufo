import { BaseObject } from '../model/base-object';
import { Player } from '../model/player';

export class CollisionDetector {
    private toCompare: BaseObject[] = null;
    public detect(player:Player, objects: BaseObject[]){

        this.toCompare = new Array();
        this.add(objects);

        this.toCompare.push(player);
        this.toCompare = this.toCompare.concat(player.getChilds());

        this.toCompare.forEach(element => {
            this.detectElement(element, this.toCompare);
        });

    }

    private add(objects:BaseObject[]){
 
        if (objects!=null){
            this.toCompare = this.toCompare.concat(objects);
            objects.forEach(element => {
                this.toCompare.push(element);
                this.add(element.getChilds());
            });
        }
 
    }

    private detectElement(element : BaseObject,objects: BaseObject[]){
        objects.forEach(element2 => {

            if (element === element2){

            }
            else if (!element.isAlive() || !element2.isAlive() || element.isDying() || element2.isDying()){}
            else if (element.getDimension()==null || element2.getDimension()==null){}
            else if (
             element.getX() < element2.getX()  + element2.getDimension().getWidth() &&
            element.getX() + element.getDimension().getWidth() > element2.getX()  &&
            element.getY() < element2.getY() + element2.getDimension().getHeight() &&
            element.getY() + element.getDimension().getHeight() > element2.getY()) {
                 // collision detected!
                // console.log("collision detected");
                if (element.constructor.name != element2.constructor.name) {
                    if (   (element.isHostile() && !element2.isHostile() ) ||
                            (!element.isHostile() && element2.isHostile() ) ) {
                 //   if (this.isEnemy(element)||this.isEnemy(element2)){
                        element.collision(element2);
                        element2.collision(element);
                    }
                }
             }
        });
    }
}
