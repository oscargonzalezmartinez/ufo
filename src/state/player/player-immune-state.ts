import { PlayerState } from './player-state';
import { BaseObject } from '../../model/base-object';
import { WeaponEffect } from '../../model/weapon/weapon-effect';

export class PlayerImmuneState  extends PlayerState{
    public static ID:string = "PlayerImmuneState";
    constructor(){
        super();
        this.id = PlayerImmuneState.ID;
        this.weaponEffect = new WeaponEffect(false,false);
        this.intervalOfChange = 5000;
    }

    public collision(element:BaseObject):boolean{
        return false;
    }
}
