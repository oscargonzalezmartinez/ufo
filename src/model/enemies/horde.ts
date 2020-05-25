import { Enemy } from './enemy';
import { BaseObject } from '../base-object';
import { DeadHordeEvent } from '../../event/dead-horde-event';
import { DeadHordeEventListener } from '../../event/dead-horde-event-listener';
import { Random } from '../../util/random';
import { HordeStatus } from './horde-status';

export class Horde<T extends Enemy> extends BaseObject{
    private listeners:DeadHordeEventListener[] = new Array();
    private enemys: Map<number,Enemy> = new Map(); 
    private status:HordeStatus = null;
    private enemyType:string=null; 
    constructor(example:T, protected maxElements:number, iteration:number=1){
        super();
        this.initHorde(example);
        this.enemyType = example.constructor.name;
        this.id = example.constructor.name+"."+new Date().getTime() +"."+ Random.getRandom(100);
        this.status = new HordeStatus(iteration);
    }

    private initHorde(example:T) {
        for (let index = 0; index < this.maxElements ; index++) {
            let enemy: Enemy = Object.create( example);
            enemy.init(index);
            this.enemys.set(index, enemy);
        }
    }

    public getEnemyType():string{
        return this.enemyType;
    }

    public suscribe(listener:DeadHordeEventListener){
        this.listeners.push(listener);
    }

    public move(){

        this.enemys.forEach((enemy: Enemy, key: number) => {

            if (enemy.isFinished()){    
                console.log(this.constructor.name +  ' delete enemy ' + key);
                this.enemys.delete(key);
            }

        });

        if (this.enemys.size == 0){
            this.emitHordeDeath();
        }
    }

    protected emitHordeDeath() {
        this.listeners.forEach(listener => {
            listener.receive(new DeadHordeEvent(this.id,this.enemyType));
        });
    }

    public getChilds():BaseObject[]{
        let result:BaseObject[] = new Array(this.enemys.size);
        let index:number =0;
        this.enemys.forEach(element => {
            result[index] = element;
            index++;
        });
        return result;
    }

    public getStatus():HordeStatus{
        return this.status;
    }
}
