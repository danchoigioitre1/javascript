const canvas = document.getElementById("canvas");
canvas.width = canvas.height = 600;
const ctx = canvas.getContext("2d");
const BACK_GROUND = "black";
ctx.fillStyle = BACK_GROUND;
ctx.fillRect(0, 0, canvas.width, canvas.width);

const SNAKE_COLOR = 'white';
const UNIT = 20;

class vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}



class SNAKE {


 constructor() {
        this.body = [
            new vector(UNIT * 4, UNIT * 4),
            new vector(UNIT * 5, UNIT * 4),
            new vector(UNIT * 6, UNIT * 4),
            new vector(UNIT * 7, UNIT * 4)
        ];

        this.speed = new vector(-1, 0)
    }

    draw() {

        ctx.fillStyle = 'blue';
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT)

        ctx.fillStyle = SNAKE_COLOR;
        for (let i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT)
        }

    }

  

    move() {

     
        for (i = 1; i < this.body.length; i++) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }

        this.body[0].x += this.speed.x * UNIT;
        this.body[0].y += this.speed.y * UNIT;


        this.draw();
    }






}


window.addEventListener('keydown', (evt) => {
    console.log(evt);
    if (evt.key == "ArrowDown") {
        player.speed.x = 0;
        player.speed.y = 1;

    }

    if (evt.key == "ArrowUp") {
        player.speed.x = 0;
        player.speed.y = -1;

    }

    if (evt.key == "ArrowRight") {
        player.speed.x = 1;
        player.speed.y = 0;

    }

    if (evt.key == "ArrowLeft") {
        player.speed.x = -1;
        player.speed.y = 0;

    }


}
)

let player = new SNAKE()
player.draw();
setInterval(player.move, 500);

