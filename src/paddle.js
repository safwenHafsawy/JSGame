export default class Paddle {
   constructor(game, position, color){
       
     this.gameWidth = game.gameWidth;
     this.position = position;
     this.pitchWidth = game.pitchWidth;

     //paddle height and width
     this.width = 120;
     this.height = 20;

     //paddle movement
     this.maxSpeed = 7;
     this.speed = 0;

     this.color = color;

   };

   moveLeft(){
        this.speed = -this.maxSpeed;
   };

   moveRight(){
        this.speed = this.maxSpeed;
   };

   stop(){
        this.speed = 0;
   };

   draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
   }

   update(dt){
        this.position.x += this.speed;
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.pitchWidth) this.position.x = this.pitchWidth - this.width;
   }
};

