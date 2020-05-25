export class Random {
    public static getRandom(max:number){
        let num =  Math.floor(Math.random()*max);
        return num;
    }
}
