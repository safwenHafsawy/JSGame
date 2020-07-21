import { detectCollisionWithPaddle, detectCollisionWithGoal } from './detectCollision.js';

export default class Ball {
    constructor(game){

        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.ballImg = document.getElementById("gameBall");

        this.position = { x: this.gameWidth / 2, y:this.gameHeight / 2};
        this.speed = { x: 7, y:4};
        this.size = 25;

        this.score = 0;

        this.rest();
    }

    rest(){
        this.speed = {
            x: -this.speed.x,
            y : -this.speed.y
        }
    }

    draw(ctx){
        ctx.drawImage(
            this.ballImg, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
        );
    };

    update(dt){
        this.position.x += this.speed. x;
        this.position.y += this.speed.y;
        
        //collision with left and right borders
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0 ){
            this.speed.x = -this.speed.x;
        }
        //collision with top and bottom borders
        if(this.position.y + this.size > this.gameHeight || this.position.y < 0 ){
            this.speed.y = -this.speed.y;
        }
        //collision with paddle
            if( detectCollisionWithPaddle(this, this.game.paddle) === 1 ){
                this.speed = {
                    x: -this.speed.x,
                    y : -this.speed.y 
                }
            }
        //collision with goal
            if( detectCollisionWithGoal(this, this.game.goal)){
                this.score ++;
                this.rest();
            }    
    }
}