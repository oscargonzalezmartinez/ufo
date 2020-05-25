import { Enemy } from './enemy';
import { Weapon } from '../weapons/weapon';
import { Bullet } from '../weapons/bullet';
import { BaseObject } from '../base-object';

export abstract class ArmedEnemy extends Enemy{

    protected weapon:Weapon<Bullet> = null;
    protected controlFire(){
        if (!this.isDying()){
            this.weapon.fire(this,this.getBulletType());
        }

        this.weapon.control();
    }

    protected abstract getBulletType();

    public getChilds():BaseObject[]{
        return this.weapon.getBullets();
    }

    public move(){
         super.move();
         this.controlFire();
     }
}
