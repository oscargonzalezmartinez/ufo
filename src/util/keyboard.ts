
export class Keyboard {

    private LEFT:number = 37;
    private RIGHT:number = 39;
    private UP:number = 38;
    private DOWN:number = 40;
    private SPACE:number = 32;

    private keys:Map<number,boolean> = new Map();

    constructor(){
      window.addEventListener("keyup", (event: KeyboardEvent) => {
        this.onKeyUp(event);
      });
  
      window.addEventListener("keydown", (event: KeyboardEvent) => {
        this.onKeyDown(event);
  /*
        // Prevent known key codes executing their default action.
        if (Controller.keyCodes[event.keyCode]) {
          event.preventDefault();
        }
        */
      });
    }
    public isLeft():boolean{
        return this.isActiceKey(this.LEFT);
    }

    public isRight():boolean{
        return this.isActiceKey(this.RIGHT);
    }

    public isUp():boolean{
        return this.isActiceKey(this.UP);
    }

    public isDown():boolean{
        return this.isActiceKey(this.DOWN);
    }

    public isSpace():boolean{
        return this.isActiceKey(this.SPACE);
    }

    private isActiceKey(key:number):boolean{
        let value:boolean = this.keys.get(key);
        if (value!=null){
            return value;
        }
        return false;
    }

    public onKeyDown(event: KeyboardEvent) {
      // To stop browser default behaviour
      event.preventDefault();
      // To stop event bubbling
      event.stopPropagation();
  
    //  console.log("Keyboard Down " + event.keyCode);
      this.keys.set(event.keyCode,true);
    }
  
    public onKeyUp(event: KeyboardEvent) {
      // To stop browser default behaviour
      event.preventDefault();
      // To stop event bubbling
      event.stopPropagation();
  
    //  console.log("Keyboard Up " + event.keyCode);
      this.keys.set(event.keyCode,false);
    }
}


