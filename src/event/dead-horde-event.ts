export class DeadHordeEvent {
    constructor(private hordeId:string,private enemyType:string){}

    public getHordeId():string{
        return this.hordeId;
    }

    public getEnemyType():string{
        return this.enemyType;
    }
}
