export default class Paddle {
   constructor(game, position, color){
       
     this.gameWidth = game.gameWidth;
     this.position = position;
     this.pitchWidth = game.pitchWidth;

     //paddle height and width
     this.width = 120;
     this.height = 20;

     //paddle movement
     this.maxSpeed = 10;
     this.speedSide = 0;
     this.speedUp = 0;

     //paddle color
     this.color = color;

   };

   moveUp(){
        this.speedUp = -this.maxSpeed;
   }

   moveDown(){
        this.speedUp = this.maxSpeed;
   }

   moveLeft(){
          this.speedSide = -this.maxSpeed;
   };

   moveRight(){
     this.speedSide = this.maxSpeed;
   }; 

   sideStop(){
        this.speedSide = 0;
   };

   upStop(){
        this.speedUp = 0;
   }

   draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
   }

   update(dt){
        this.position.y += this.speedUp;
        this.position.x += this.speedSide;
        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.pitchWidth) this.position.x = this.pitchWidth - this.width;
   }
};
