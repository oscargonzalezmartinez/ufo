import { BaseObject } from '../model/base-object';
import { StateTransitionFunction } from './state-transition-function';

export class StateTransition {

    protected transitions:Map<string,string> = new Map();
    protected actualIterations:number = 0;
    constructor(protected source:string = null, 
                protected target:string = null,
                protected stateTransitionFunction:StateTransitionFunction = null,
                protected targetIfTrue:string = null){

    }

    public getSource():string{
        return this.source;
    }
    
    public getTarget():string{
        return this.target;
    }


    public getActualIterations():number{
        return this.actualIterations;
    }

    public addIteration(){
        this.actualIterations++;
    }

    public getStateTransitionFunction():StateTransitionFunction{
        return this.stateTransitionFunction;
    }

    public getTargetIfTrue():string{
        return this.targetIfTrue;
    }
}
