export class HordeStatus{

    constructor(private max:number, private finished:boolean = false){

    }

    public getMax():number{
        return this.max;
    }

    public setFinished(finished:boolean){
        this.finished = finished;
    }

    public isFinished(){
        return this.finished;
    }
}