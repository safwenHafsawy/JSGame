import { detectCollisionWithGoal } from './detectCollision.js';

export default class goal {
    constructor(game, pitchWidth){
        this.img = document.getElementById('goal');

        this.game = game;
        this.pitchWidth = pitchWidth;

        this.width = 300;
        this.height = 60;

        this.position = {
            x : this.pitchWidth / 2 - this.width / 2 ,
            y : 0
        }

    }

    draw(ctx){
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }

    update(dt){
        
    }
}