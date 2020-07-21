export default class Paddle {
   constructor(game){
       
     this.gameWidth = game.gameWidth;

     //paddle height and width
     this.width = 100;
     this.height = 5;

     //paddle movement
     this.maxSpeed = 7;
     this.speed = 0;

     //paddle positionition
     this.position= {
          x : game.gameWidth / 2 - this.width /2 ,
          y: game.gameHeight - this.height - 65
        };
   }

   moveLeft(){
        this.speed = -this.maxSpeed;
   }

   moveRight(){
        this.speed = this.maxSpeed;
   }

   stop(){
        this.speed = 0;
   }

   draw(ctx){
        ctx.fillStyle = "white";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
   }

   update(dt){
        this.position.x += this.speed;
        if(this.position.x < 1) this.position.x = 1;
        if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width - 1;
   }
};