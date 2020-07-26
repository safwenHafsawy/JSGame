export default class Goal {
    constructor(game, position, color){

        this.game = game;

        this.width = 700;
        this.height = 4;

        this.position = position;
        this.color = color;

    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(dt){
      
    }
};

