//detecting bottom and Top collision
export function detectCollisionWithPaddle(ball, gameObject){
    //ball 
    let topOfBall = ball.position.y;
    let bottomOfBall = ball.position.y + ball.size;
    //gameObject
    let topOfgameObject = gameObject.position.y;
    let bottomOfgameObject = gameObject.position.y + gameObject.height;
    let leftOfgameObject = gameObject.position.x;
    let rightOfgameObject = gameObject.position.x + gameObject.width;
    //checking gameOject
    if(
        topOfBall <= bottomOfgameObject &&
        bottomOfBall >= topOfgameObject &&
        ball.position.x  >= leftOfgameObject &&
        ball.position.x + ball.size <= rightOfgameObject
         
    ){
        return true;
    }else{
        return false;
    }

};

export function detectCollisionWithGoal(ball, gameObject){
     //ball 
     let topOfBall = ball.position.y;
     let bottomOfBall = ball.position.y;
     //gameObject
     let topOfgameObject = gameObject.position.y;
     let bottomOfgameObject = gameObject.position.y + gameObject.height - 25;
     let leftOfgameObject = gameObject.position.x - 25;
     let rightOfgameObject = gameObject.position.x + gameObject.width - 25 ;
     //checking gameOject
     if(
         topOfBall < bottomOfgameObject &&
         bottomOfBall > topOfgameObject &&
         ball.position.x  > leftOfgameObject &&
         ball.position.x  < rightOfgameObject
          
     ){
         return true;
     }else{
         return false;
     }
}
