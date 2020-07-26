export default class inputHandler{
    constructor(game, paddle, secondPaddle){
        document.addEventListener("keydown", (event)=>{
            switch(event.keyCode){      
                case 37: 
                    paddle.moveLeft();
                break;
                case 39 : 
                    paddle.moveRight();
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
                    if (paddle.speed < 0) paddle.stop();
                break;
                case 39:
                    if (paddle.speed > 0) paddle.stop();
                break;
                case 81 :
                    if(secondPaddle.speed < 0) secondPaddle.stop();
                break;
                case 68 : 
                    if(secondPaddle.speed > 0) secondPaddle.stop();
                break;
                
            }
        });
    }
        
}