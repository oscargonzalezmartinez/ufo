import { StateTransition } from './state-transition';
import { BaseObject } from '../model/base-object';
import { StateTransitionFunction } from './state-transition-function';

export class StateTransitionController {
    protected transitions:Map<string,StateTransition> = new Map();

    public add(source:string, target:string,stateTransitionFunction:StateTransitionFunction=null, targetIfTrue:string = null):StateTransitionController{
        this.transitions.set(source,new StateTransition(source, target, stateTransitionFunction, targetIfTrue));
        return this;
    }

    public get(sourceObject:BaseObject, source:string):string{
        let st:StateTransition = this.transitions.get(source);
        st.addIteration();

        if (st.getStateTransitionFunction() != null && st.getStateTransitionFunction().changeState(sourceObject) ){
            return st.getTargetIfTrue();
        }

        return this.transitions.get(source).getTarget();

    }
}
