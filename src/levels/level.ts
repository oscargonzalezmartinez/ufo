import { BaseObject } from '../model/base-object';
import { Horde } from '../model/enemies/horde';
import { DeadHordeEvent } from '../event/dead-horde-event';
import { DeadHordeEventListener } from '../event/dead-horde-event-listener';
import { Enemy } from '../model/enemies/enemy';

export abstract class Level implements DeadHordeEventListener{
    protected finished:boolean = false;
    protected hordes: Map<string,Horde<Enemy>> =  new Map(); 
    protected hordeCounter: Map<string,number> = new Map();

    protected initHorde(type:string){

    }

    protected addHorde(horde:Horde<Enemy>){
        this.hordes.set(horde.getId(),horde);
        horde.suscribe(this);
        if (this.hordeCounter.get(horde.getEnemyType())==null){
            this.hordeCounter.set(horde.getEnemyType(),1);
        }
    }

    public isFinished():boolean{
        return this.finished;
    }

    public getChilds():BaseObject[]{
        let childs: BaseObject[] = new Array();
        this.hordes.forEach((horde: Horde<Enemy>, key: string) => {
            childs.push(horde);
        });

        return childs;
    }
    
    receive(event: DeadHordeEvent) {
        let hordeId = event.getHordeId();
        this.hordes.get(hordeId).getStatus().setFinished(true);
        let counter = this.hordeCounter.get(event.getEnemyType()) + 1 ;
        let moreHorde = counter <= this.hordes.get(hordeId).getStatus().getMax();
        if (moreHorde){
            this.hordeCounter.set(event.getEnemyType(),counter);
            this.initHorde(event.getEnemyType());
        }else{
            
            let bFinished = true;
            this.hordes.forEach((horde: Horde<Enemy>, key: string) => {
    
                if (!horde.getStatus().isFinished()){    
                  bFinished = false;
                }
    
            });
    
            this.finished =  bFinished;
        }

    }
    
}
