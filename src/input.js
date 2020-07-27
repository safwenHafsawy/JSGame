export default class inputHandler{
    constructor(game, paddle, secondPaddle){
        document.addEventListener("keydown", (event)=>{
            switch(event.keyCode){      
                case 38 : 
                    paddle.moveUp();
                break;
                case 40 : 
                    paddle.moveDown();
                break;
                case 37: 
                    paddle.moveLeft();
                break;
                case 39 : 
                    paddle.moveRight();
                break;
                case 90 : 
                    secondPaddle.moveUp();
                break;
                case 87 : 
                    secondPaddle.moveDown();
                break;
                case 81 :
                    secondPaddle.moveLeft();
                break;
                case 68 : 
                    secondPaddle.moveRight();
                break;
                case 27 :
                    game.togglePause();
                break;
                case 13: 
                    game.start();
                break; 
            }
        });
        document.addEventListener("keyup", event => {
            switch (event.keyCode) {
                case 37:
                    if (paddle.speedSide < 0) paddle.sideStop();
                break;
                case 39:
                    if (paddle.speedSide > 0) paddle.sideStop();
                break;
                case 81 :
                    if(secondPaddle.speedSide < 0) secondPaddle.sideStop();
                break;
                case 68 : 
                    if(secondPaddle.speedSide > 0) secondPaddle.sideStop();
                break;
                case 38 : 
                    if(paddle.speedUp < 0) paddle.upStop();
                break;
                case 40 : 
                    if(paddle.speedUp > 0) paddle.upStop();
                break;
                case 90 : 
                    if(secondPaddle.speedUp < 0) secondPaddle.upStop();
                break;
                case 87 : 
                    if(secondPaddle.speedUp > 0) secondPaddle.upStop();
                break;
                
                
            }
        });
    }
        
}