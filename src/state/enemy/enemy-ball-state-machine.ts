import { StateMachine } from '../state-machine';
import { EnemyBallState } from './enemy-ball-state';
import { EnemyHitState } from './enemy-hit-state';
import { EnemyFinishedState } from './enemy-finished-state';

export class EnemyBallStateMachine extends StateMachine {
    constructor(){
        super();
        
        this.states.set(EnemyBallState.ID, new EnemyBallState());
        this.states.set(EnemyHitState.ID, new EnemyHitState());
        this.states.set(EnemyFinishedState.ID, new EnemyFinishedState());
        this.currentKey = EnemyBallState.ID;
        this.transitions.add(EnemyBallState.ID,EnemyHitState.ID)
                        .add(EnemyHitState.ID,EnemyFinishedState.ID);
        
    }
}
