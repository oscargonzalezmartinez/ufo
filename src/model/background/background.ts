import { StarField } from './star-field';
import { Universe } from '../universe';
import { Dimension } from '../dimension';
import { Planet } from './planet';
import { UniverseDimension } from '../universe-dimension';
import { HUD } from './hud';
export class Background {
    
    private startField:StarField = new StarField();
    private NUM_STARS: number = 150;
    private background: any = new Image();
    private x:number=0;

    private dimension:Dimension = new Dimension(1782,600);
    private planet:Planet = new Planet();
    private hud:HUD = new HUD();

    constructor(){
        this.background.src = 'assets/backgrounds/farback.gif';
    }

    public move(){
        this.startField.move();
/*
        this.x+=2;

        if (this.x>this.dimension.getWidth()){
            this.x = 0;
        }
*/

        this.x-=0.15;

        if (this.dimension.getWidth() + this.x < 0){
            this.x = 0;
        }
        this.planet.move();
    }

    public draw( ctx: CanvasRenderingContext2D){
        let width = this.dimension.getWidth();//250;
        //let numImages:number = Math.ceil(UniverseDimension.WIDTH / this.dimension.getWidth()) + 1;
        let numImages:number = Math.ceil(UniverseDimension.WIDTH / width) + 1;
      //  numImages = 1;
        for (let i = 0; i <= numImages; i++) {
  //ctx.drawImage(city, cityx, 0, 300, 300, 0, 0, 300, 300);  
            let sX = 0;
            let sW = width
            let dX = i*width + this.x;// 0;//this.x;
            let dW = width;
            ctx.drawImage(this.background,
                sX,0,sW,this.dimension.getHeight(),
                //desX,0,this.dimension.getWidth()-desX,this.dimension.getHeight());
                dX,0,dW,this.dimension.getHeight());

            /*
            let sX = i *this.dimension.getWidth() + this.x;
            let sW = this.dimension.getWidth()-this.x;
            let dX =  this.dimension.getWidth() * i  - this.x;
            let dW = this.dimension.getWidth() - this.x;
            ctx.drawImage(this.background,
                        sX,0,sW,this.dimension.getHeight(),
                        //desX,0,this.dimension.getWidth()-desX,this.dimension.getHeight());
                        dX,0,dW,this.dimension.getHeight());*/
        } 
        
        this.planet.draw(ctx);
        this.startField.draw(ctx);
        this.hud.draw(ctx);
    }

    public getHUD():HUD{
        return this.hud;
    }
}
