import { State } from '../state';

export class EnemyFinishedState extends State{
    public static ID:string = "EnemyFinishedState";
    constructor(){
        super();
        this.finished = true;
    }
}
