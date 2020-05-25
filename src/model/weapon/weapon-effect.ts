export class WeaponEffect {

    constructor(protected afectedByWeapons:boolean = true,protected bulletPassThrough:boolean = false){}

    public isAfectedByWeapons():boolean{
        return this.afectedByWeapons;
    }

    public isBulletPassThrough():boolean{
        return this.bulletPassThrough;
    }

    public setAfectedByWeapons(afectedByWeapons:boolean){
        return this.afectedByWeapons = afectedByWeapons;
    }

    public setBulletPassThrough(bulletPassThrough:boolean){
        return this.bulletPassThrough = bulletPassThrough;
    }
}
