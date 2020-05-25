import { State } from './state'
import { BaseObject } from '../model/base-object';
import { Velocity } from '../model/velocity';
import { StateTransitionController } from './state-transition-controller';

export class StateMachine {
    protected states:Map<string,State> = new Map();
    protected transitions:StateTransitionController = new StateTransitionController();
    protected currentKey:string = null;
    private lastTimeStateChange:number = new Date().getTime();
    public getState():State{
        return this.states.get(this.currentKey);
    }

    public collision(source:BaseObject, element:BaseObject){
        let stateChange =  this.getState().collision(element);
        if (stateChange){
            this.currentKey = this.transitions.get(source, this.currentKey);
        }
    }

    public draw(source:BaseObject, ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        let state:State = this.getState();
        let stateChange = state.draw(ctx,x,y);
        if (stateChange){
            this.currentKey = this.transitions.get(source,this.currentKey);
        }
        else if ( state.getIntervalOfChange()>0 && new Date().getTime() - this.lastTimeStateChange > state.getIntervalOfChange()){
            this.currentKey = this.transitions.get(source,this.currentKey);
        }
    //    console.log(this.constructor.name + " draw " + this.currentKey);

        if (source.getDimension()!=null){
            if (x + source.getDimension().getWidth() < 0){
               state.outscreen();
            }
        }

        return true;
    }

    public setVelocity(velocity:Velocity){
        this.getState().setVelocity(velocity);
    }
}
