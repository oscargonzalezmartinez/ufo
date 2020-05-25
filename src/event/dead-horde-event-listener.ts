import { DeadHordeEvent } from './dead-horde-event';

export interface DeadHordeEventListener {
    receive(event:DeadHordeEvent);
}
