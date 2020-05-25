import { BaseObject } from '../model/base-object';

export interface StateTransitionFunction {

    changeState(element:BaseObject):boolean;
}
