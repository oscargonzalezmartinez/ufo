
import { AnimationController } from './animation-controller';
import { Random } from '../util/random';

export class FlickAnimation extends AnimationController {
/*
    constructor(animation: AnimationController){
        super(animation.spriteImage,animation.frameRate);
    }
*/
protected count:number = 0;
    private getColor(frame:number, color:number):number{
        let c = color + frame / 500;
        if (c > 50){
            c = 50;
        }

        return c;
    }

    protected totalFrames():number{
        return 10;
    }

    public _draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        this.count++;
        let modif = Random.getRandom(50)*50;
        //if (this.count % 10){
           // super.draw(ctx,x+modif,y+modif);
           ctx.fillRect(x,y,x+50,y+50);
        //}
        return true;//this.count<15000;
    }

    public draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
  
        let frame:number = this.count;//this.getFrame();
        let movement:number = 2; 
        if (this.frameCount % 2 == 0){
            movement = -2;
        }
        
        y+=movement;
      //  ctx.drawImage(this.getSprite(),x,y);
      //  super.draw(ctx, x, y);
      
        let sprite:CanvasImageSource = this.getSprite();
       // let width:number = sprite.width;
       // let height:number = sprite.height;
        createImageBitmap(this.spriteImage[0],0,0,131,112).then(
            (sprites) =>this.paint(sprites,ctx,x,y)//console.log( this.constructor.name + " " + sprites)
    ).catch(function(error) { 
        // error handler is called
        console.log(error); 
     });

        let res =   !(this.frameCount == this.totalFrames() - 1 );
       return res;
    }

    private paint(sprite:any,ctx: CanvasRenderingContext2D, x:number, y:number){
        var data = sprite.data;
        ctx.drawImage(sprite,x,y);
    }
    public draw2(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        //super.draw(ctx,x,y);
        //ctx.drawImage(this.getSprite(),0,0);
        //ctx.createImageData();
        let frame:number = this.count;//this.getFrame();

        var imageData =  ctx.getImageData(x, y, 100, 100);
        var data = imageData.data;
        let sprite:CanvasImageSource = this.getSprite();
       // let width:number = sprite.width;
       // let height:number = sprite.height;
        createImageBitmap(sprite,0,0,50,50).then(function(sprites) {
            var data = sprites[0].data;
            ctx.drawImage(sprites[0], 0, 0);
          
          for (var i = 0; i < data.length; i += 4) {
              /*
            var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            
            data[i]     = avg; // red
            data[i + 1] = avg; // green
            data[i + 2] = avg; // blue
           */
         
           //data[i]     = this.getColor(frame,data[i]);
           //data[i + 1] = this.getColor(frame,data[i + 1]);
           //data[i + 2] = this.getColor(frame,data[i + 2]);// blue
           data[i+3] = 10;
         /*
           data[i]     = data[i];
           data[i + 1] = data[i + 1];
           data[i + 2] = data[i + 2];
           */
          }

          //imageData.data = data;
          sprites[0].data = data;
          ctx.putImageData(sprites[0],x,y);
    });

        let res =   !(this.frameCount == this.totalFrames() - 1 );
       return res;
    }
}
