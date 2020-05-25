import { PointsEvent } from './points-event';

export interface PointsEventListener {
    receive(event:PointsEvent);
}

