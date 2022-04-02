const canvas = document.getElementById("canvas");
canvas.width = canvas.height = 600;
const ctx = canvas.getContext("2d");
const BACK_GROUND = "black";
ctx.fillStyle = BACK_GROUND;
ctx.fillRect(0, 0, canvas.width, canvas.width);

const SNAKE_COLOR = 'white';
const UNIT = 20;

class vector {
    x; y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

this.speed = new vector(-1, 0)

class SNAKE {

    body; speed;
    constructor() {
        this.body = [
            new vector(UNIT * 3, UNIT * 3),
            new vector(UNIT * 4, UNIT * 3),
            new vector(UNIT * 5, UNIT * 3)
        ]

        this.speed = new vector(-1, 0)
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT)
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = SNAKE_COLOR;
        for (var i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT)


        }
        ctx.closePath();
    }

    clear() {
        ctx.fillStyle = BACK_GROUND;
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT);

        ctx.fillStyle = SNAKE_COLOR;

        for (var i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x, this.body[i].y, UNIT, UNIT);

        }
    }


    move() {
        
        for (i = this.body.length - 1; i >= 1; i--) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y



        }

        this.body[0].x += this.speed.x * UNIT;
        this.body[0].y += this.speed.y * UNIT;

        this.draw()
    }
}

let player = new SNAKE()
player.draw();
setInterval(player.move, 1000);
