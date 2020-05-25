export class Dimension {

    constructor(private width:number = 0,
        protected height:number = 0){

        }

        
        public getWidth() : number {
            return this.width;
        }
        
        public getHeight() : number {
            return this.height;
        }
}
