export class polygon {
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