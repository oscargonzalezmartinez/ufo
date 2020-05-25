import { Enemy } from './enemy';
import { UniverseDimension } from '../universe-dimension';
import { SnakeNode } from './snake-node';
import { BaseObject } from './../base-object';
export class Snake extends Enemy{

    private defaultStep:number = 60;
    private nodes:SnakeNode[] =  new Array();
    public init(index:number) {
        
        for (let i:number = 0; i< 10; i++){
            let node = new SnakeNode();
            node.init(i);
            this.nodes.push(node);
        }
    }

    protected initialPosition(index:number){
        let x:number = (index * this.getDimension().getWidth()/2 ) + UniverseDimension.WIDTH - 100;
        this.setX(x);
        this.setY(this.getDimension().getHeight() + this.getDimension().getHeight() / 2);
    }
    
    public move(){
        this.nodes.forEach(node => {
            node.move();
        });

        let nodesBack:SnakeNode[] =  new Array();
        this.nodes.forEach(node => {
            if (node.isAlive()){
                nodesBack.push(node);
            }
        });

        this.nodes = nodesBack;
    }

    public getChilds():BaseObject[]{
        return this.nodes;
    }
}