import Game from './game.js';

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

//game dementions
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//starting game 
let game = new Game(GAME_WIDTH, GAME_HEIGHT);

//the game loop
let lastTime = 0;
function gameLoop(timestamp){
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear canvas
    game.update(dt);
    game.draw(ctx);
    

    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);


