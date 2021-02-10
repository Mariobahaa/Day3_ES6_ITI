class polygon {
    constructor(x1,y1,x2,y2){
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }
    
    toString(){
        let str = "";
        for(let i in this){
            str+= i.toString();
            str+= ':';
            str+= this[i].toString();
            str+= ' ';
        }
        return str;
    }
}

class rectangle extends polygon{
    constructor(x1,y1,x2,y2){
        super(x1,y1,x2,y2);
    }
    
    
} 

let p = new polygon(1,1,1,1);
console.log(p.toString());
