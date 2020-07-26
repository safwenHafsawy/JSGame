export default class Paddle {
   constructor(game, position, color){
       
     this.gameWidth = game.gameWidth;
     this.position = position;
     this.pitchWidth = game.pitchWidth;

     //paddle height and width
     this.width = 100;
     this.height = 5;

     //paddle movement
     this.maxSpeed = 11;
     this.speed = 0;

     this.color = color;

   };

   fastMoveRight(){
        this.speed = this.maxSpeed;
   }

   fastMoveLeft(){
        this.speed = -this.maxSpeed;
   }

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
        if(this.position.x < 1) this.position.x = 1;
        if(this.position.x + this.width > this.pitchWidth) this.position.x = this.pitchWidth - this.width - 1;
   }
};

