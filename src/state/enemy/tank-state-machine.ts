import { StateMachine } from '../state-machine';
import { EnemyHitState } from './enemy-hit-state';
import { EnemyFinishedState } from './enemy-finished-state';
import { TankState } from './tank-state';
import { TankFlickState } from './tank-flick-state';

export class TankStateMachine extends StateMachine{

    constructor(){
        super();
        this.states.set(TankState.ID, new TankState());
        this.states.set(TankFlickState.ID, new TankFlickState());
        this.states.set(EnemyHitState.ID, new EnemyHitState());
        this.states.set(EnemyFinishedState.ID, new EnemyFinishedState());

        this.currentKey = TankState.ID;

        this.transitions.add(TankState.ID,TankFlickState.ID)
                        .add(TankFlickState.ID,TankState.ID,new TankFlickState(),EnemyHitState.ID)
                        .add(EnemyHitState.ID,EnemyFinishedState.ID);
    }
}
