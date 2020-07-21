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
        this.lives = 3;

    }
    start(){
        this.gameState = GAMESTATE.MENU;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.goal = new Goal(this, this.pitchWidth);
        this.gameObjects = [this.paddle, this.ball, this.goal];


        new inputHandler(this, this.paddle);       
    };

    update(dt){
        if(this.gameState === GAMESTATE.PAUSED || this.gameState === GAMESTATE.MENU) return;

        this.gameObjects.forEach(object => object.update(dt));
        
    };

    draw(ctx){
        this.gameObjects.forEach(object => object.draw(ctx));

        //drawing the pitch borders
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "whitesmoke";
        ctx.rect(700,0, 0, 700);
        ctx.stroke();

        //scoreSheet drawing 
        ctx.rect(700, 100, 100, 100);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.font ="50px Courier";
        ctx.fillStyle = "Black";
        ctx.textAlign = "center";
        ctx.fillText(this.ball.score, 750, 160);

        //drawing the pause screen 
        if(this.gameState === GAMESTATE.PAUSED){
            ctx.rect(0, 0 ,800, 600);
            ctx.fillStyle = "rgba(0,0,0,0.5)"
            ctx.fill();
            ctx.font = "50px courier";
            ctx.fillStyle = "Whitesmoke";
            ctx.textAlign = " center";
            ctx.fillText("Game Paused", this.gameWidth / 2 , this.gameHeight /2 );
        }
        //drawing the menu
        if(this.gameState === GAMESTATE.MENU){
            ctx.rect(0, 0 ,800, 600);
            ctx.fillStyle = "black"
            ctx.fill();
            ctx.font = "30px courier";
            ctx.fillStyle = "Whitesmoke";
            ctx.textAlign = " center";
            ctx.fillText("Press Enter to start the game", this.gameWidth / 2 , this.gameHeight /2 );

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