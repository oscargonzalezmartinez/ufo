import { StateMachine } from '../state-machine';
import { PlayerState } from './player-state';
import { PlayerHitState } from './player-hit-state';
import { PlayerImmuneState } from './player-immune-state';

export class PlayerStateMachine extends StateMachine{
    

    constructor(){
        super();
        this.states.set(PlayerState.ID, new PlayerState());
        this.states.set(PlayerHitState.ID, new PlayerHitState());
        this.states.set(PlayerImmuneState.ID, new PlayerImmuneState());
        
        this.currentKey = PlayerState.ID;
        this.transitions.add(PlayerState.ID,PlayerHitState.ID)
                        .add(PlayerHitState.ID,PlayerImmuneState.ID)
                        .add(PlayerImmuneState.ID,PlayerState.ID);
                        
    }

}
