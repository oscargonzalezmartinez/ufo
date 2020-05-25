import { StateMachine } from '../state-machine';
import { LittleUfoState } from './little-ufo-state';
import { EnemyHitState } from './enemy-hit-state';
import { EnemyFinishedState } from './enemy-finished-state';

export class LittleUfoStateMachine extends StateMachine{
    constructor(){
        super();
        this.states.set(LittleUfoState.ID, new LittleUfoState());
        this.states.set(EnemyHitState.ID, new EnemyHitState());
        this.states.set(EnemyFinishedState.ID, new EnemyFinishedState());
        this.currentKey = LittleUfoState.ID;
        this.transitions.add(LittleUfoState.ID,EnemyHitState.ID)
                        .add(EnemyHitState.ID,EnemyFinishedState.ID);
    }
}
