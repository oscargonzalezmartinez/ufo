import { LivesEvent } from './lives-event';

export interface LivesEventListener {
    receive(event:LivesEvent);
}
