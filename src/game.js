import Paddle from "./paddle.js";
import inputHandler from "./input.js";
import Ball from './ball.js';
import Goal from "./goal.js";


export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.pitchWidth = 700;
        this.lives = 3;
        const GAMESTATE = [
            MENU = 0,
            RUNNING = 1, 
            PAUSED = 2, 
            OVER = 3
        ]
    }
    start(){
        this.gameStatut  = GAMESTATE.RUNNING;
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.goal = new Goal(this, this.pitchWidth);
        this.gameObjects = [this.paddle, this.ball, this.goal];


        new inputHandler(this.paddle);       
    };

    update(dt){
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
        //lifes draw
      
    };

    togglePause(){
        if(this.gameStatut === GAMESTATE.PAUSED) return;
        else{
            this.gameStatut === GAMESTATE.RUNNING;
        }
    }
}