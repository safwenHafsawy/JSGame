//detecting bottom and Top collision
export function detectCollision(ball, gameOject){
    //ball 
    let topOfBall = ball.position.y;
    let bottomOfBall = ball.position.y + ball.size;
    let leftOfBall = ball.position.x;
    let rightOfBall = ball.position.x + ball.size;
    //gameOject
    let topOfgameObject = gameOject.position.y;
    let bottomOfgameObject = gameOject.position.y + gameOject.height;
    let leftOfgameObject = gameOject.position.x;
    let rightOfgameObject = gameOject.position.x + gameOject.width;


    if(
        topOfBall <= bottomOfgameObject &&
        bottomOfBall >= topOfgameObject &&
        leftOfBall >= leftOfgameObject &&
        rightOfBall <= rightOfgameObject
    ){
        return true;
    }else{
        return false;
    }

};



