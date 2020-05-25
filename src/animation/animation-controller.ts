export class AnimationController {

    protected lastAnimationTime: Date = new Date();  

    protected sprite:any = null;
    protected frameCount:number = 0;


    protected spriteImage: any[] = null;
    constructor(protected spriteList: string[], protected frameRate:number){
        this.spriteImage = new Array();
        if (spriteList!=null){
            spriteList.forEach(asset => {
                let image:any = new Image();
                image.src = asset;
                this.spriteImage.push(image);
            });
        }
    }

    public setInitialFrame(frame:number){
        this.frameCount = frame;
    }

    public isLastFrame():boolean{
        return false;
    }
    
    protected totalFrames():number{
        return this.spriteImage.length;
    }

    protected getFrame():number{
        let now: Date = new Date();  
        if (now.getTime() - this.lastAnimationTime.getTime() > this.frameRate){
            this.frameCount++;
            if (this.frameCount > this.totalFrames()- 1){
                this.frameCount = 0;
            }

            this.lastAnimationTime = now;
        }
        
        return this.frameCount;
    }

    public getSprite():CanvasImageSource{
        return this.spriteImage[this.getFrame()];
    }

    public draw(ctx: CanvasRenderingContext2D, x:number, y:number):boolean{
        ctx.drawImage(this.getSprite(),x, y);
        return true;
    }
}

