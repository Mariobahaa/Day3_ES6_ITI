class polygon {
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    toString() {
        let str = "";
        for (let i in this) {
            if (typeof (this[i]).toString() != "function") {
                str += i.toString();
                str += ':';
                str += this[i].toString();
                str += ' ';
            }
        }
        return str;
    }
}

class rectangle extends polygon {
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

class circle extends polygon {
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


let c = new circle(500,500,25);
c.draw();