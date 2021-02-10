import {polygon} from "./polygon.js"

export class rectangle extends polygon {
    constructor(x1, y1, x2, y2) {
        super(x1, y1, x2, y2);
    }

    draw() {
        var c = document.getElementById("cnv");
        var ctx = c.getContext("2d");
        ctx.fillRect(this.x1, this.y1, this.x2, this.y2);
    }

    area() {
        return (((Math.max(this.x1, this.x2)) - (Math.min(this.x1, this.x2))) *
            ((Math.max(this.y1, this.y2)) - (Math.min(this.y1, this.y2))))
    }
}

class square extends polygon {
    constructor(x1, y1, side) {
        super(x1, y1, x1 + side, y1 + side);
    }

    draw() {
        var c = document.getElementById("cnv");
        var ctx = c.getContext("2d");
        ctx.fillRect(this.x1, this.y1, this.x2, this.y2);
    }

    area() {
        return side * side;
    }
}

export class circle extends polygon {
    constructor(x1, y1, radius) {
        super(x1, y1, null, null);
        this.radius = radius;
    }

    draw() {
        var c = document.getElementById("cnv");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x1, this.y1, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

export class triangle extends polygon {
    constructor(x1, y1, x2, y2, x3, y3) {
        super(x1, y1, x2, y2);
        this.x3 = x3;
        this.y3 = y3;
    }

    draw() {
        var c = document.getElementById("cnv");
        var ctx = c.getContext("2d");
        
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.lineTo(this.x3, this.y3);
        ctx.lineTo(this.x1, this.y1);
        ctx.stroke();
    }
    area() {
        return 1/2[this.x1(this.y2 - this.y3) + this.x2(this.y3 - this.y1) + this.x3(this.y1 - this.y2)]
    }
}


