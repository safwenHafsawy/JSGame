import { detectCollision } from './detectCollision.js';

export default class Ball {
    constructor(game){

        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.pitchWidth = game.pitchWidth;

        this.ballImg = document.getElementById("gameBall");

        this.position = { x: 10, y: 10};
        this.speed = { x: 8, y:5};
        this.size = 16;

        this.firstPlayerScore = -1;
        this.secondPlayerScore = 0;

        this.rest1();
        this.rest2();
    }

    //rest if player one scores
    rest1(){
        this.speed = {
            x : -this.speed.x,
            y : -this.speed.y
        };
        this.position = {
            x : 10,
            y : 10
        };
    };

    //rest if player two scores
    rest2(){
        this.speed = {
            x : -this.speed.x,
            y : -this.speed.y
        };
        this.position = {
            x : 10,
            y : 550 
        };
    }


    draw(ctx){
        ctx.drawImage(
            this.ballImg, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size
        );
        
        ctx.rect(700, 0, 700, 600);
        ctx.fillStyle = 'white';
        ctx.fill();
        //player 1 scoresheet drawing 
 
        ctx.font ="60px Courier";
        ctx.fillStyle = "Black";
        ctx.textAlign = "center";
        ctx.fillText(this.firstPlayerScore, 750, 250);

        //player 2 scoresheet drawing

        ctx.font ="60px Courier";
        ctx.fillStyle = "Black";
        ctx.textAlign = "center";
        ctx.fillText(this.secondPlayerScore, 750, 390);
    };

    update(dt){
        this.position.x += this.speed. x;
        this.position.y += this.speed.y;
        
        //collision with left and right wall
        if(this.position.x + this.size > this.pitchWidth || this.position.x < 0 ){
            this.speed.x = -this.speed.x;
        }
        //collision with top and bottom wall
        if(this.position.y + this.size > this.gameHeight ){
            this.speed.y = -this.speed.y;
            this.firstPlayerScore ++;
            this.rest1();
        }
        if( this.position.y < 0 ){
            this.speed.y = -this.speed.y;
            this.secondPlayerScore ++;
            this.rest2();
        }
 
        if(this.secondPlayerScore === 5 ){
            this.game.playerTwoWin = true;
        }else if(this.firstPlayerScore ===5){
            this.game.playerOneWin = true;
        }

        //collision with paddles
        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
             
        
        if( detectCollision(this, this.game.secondPaddle) ){
            this.speed.y = -this.speed.y;
        }


    }
}