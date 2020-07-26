import Paddle from "./paddle.js";
import inputHandler from "./input.js";
import Ball from './ball.js';
import Goal from "./goal.js";

const GAMESTATE = {
    MENU : 0,
    RUNNING : 1, 
    PAUSED : 2, 
    OVER : 3,
};

export default class Game{
    constructor(gameWidth, gameHeight){

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.pitchWidth = 700;

        this.gameState = GAMESTATE.MENU;
        this.paddle = new Paddle(this, {x : this.pitchWidth / 2 , y : this.gameHeight - 100 }, "blue");
        this.secondPaddle = new Paddle(this, {x : this.pitchWidth / 2, y : 100}, "red"); 
        this.ball = new Ball(this);
        this.firstGoal = new Goal(this,
            { x : this.pitchWidth / 2 - 93 , y : 3 }, 
             "white");
        this.secondGoal = new Goal(
            this, 
            { x : this.pitchWidth / 2 -93  ,  y : 590}, 
            "white");
        this.gameObjects = [];


        new inputHandler(this, this.paddle, this.secondPaddle);
        
        this.playerOneWin = false;
        this.playerTwoWin = false;
        this.winner = "";


    }
    start(){
        if(this.gameState === GAMESTATE.MENU){
            this.gameState = GAMESTATE.RUNNING;
        }
        this.gameObjects = [this.ball, this.paddle, this.secondPaddle, this.firstGoal, this.secondGoal]
    };

    update(dt){
        if(this.gameState === GAMESTATE.PAUSED || this.gameState === GAMESTATE.MENU || this.gameState === GAMESTATE.OVER) return;

        this.gameObjects.forEach(object => object.update(dt));
    
        if(this.playerOneWin || this.playerTwoWin){
            this.gameState = GAMESTATE.OVER;
        }
    };

    draw(ctx){
        this.gameObjects.forEach(object => object.draw(ctx));

        //drawing the pitch borders
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "whitesmoke";
        ctx.rect(700,0, 0, 700);
        ctx.stroke();

        //drawing the pause screen 
        if(this.gameState === GAMESTATE.PAUSED){
            ctx.rect(0, 0 ,800, 600);
            ctx.fillStyle = "whitesmoke"
            ctx.fill();
            ctx.font = "50px courier";
            ctx.fillStyle = "Black";
            ctx.textAlign = " center";
            ctx.fillText("Game Paused", this.gameWidth / 2 , this.gameHeight /2 );
        }
        //drawing the menu screen
        if(this.gameState === GAMESTATE.MENU){
            ctx.rect(0, 0 ,800, 600);
            ctx.fillStyle = "#2C3E50"
            ctx.fill();
            ctx.font = "30px courier";
            ctx.fillStyle = "Whitesmoke";
            ctx.textAlign = " center";
            ctx.fillText("Press ENTER to start playing", this.gameWidth / 2 -240 , this.gameHeight /2 );

        }
        
        //drawing the game over screen
        if(this.gameState === GAMESTATE.OVER){
            ctx.rect(0, 0 ,800, 600);
            ctx.fillStyle = "black"
            ctx.fill();
            ctx.font = "30px courier";
            ctx.fillStyle = "Whitesmoke";
            ctx.textAlign = " center";
            if(this.playerOneWin) ctx.fillText("Red is the winner ", this.gameWidth / 2 , this.gameHeight /2 );
            if(this.playerTwoWin) ctx.fillText("Blue is the winner " , this.gameWidth / 2 , this.gameHeight /2 )
        }

    };

    togglePause(){
        if(this.gameState === GAMESTATE.PAUSED){
            this.gameState = GAMESTATE.RUNNING
        }else{
            this.gameState = GAMESTATE.PAUSED;
        }
    };
}