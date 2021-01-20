class ground {
    constructor(x,y,width,height) {
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display() {
        var posG = this.body.position;
        push()
        translate(posG.x, posG.y);
        rectMode(CENTER)
        fill(128,128,128);
        rect(0,0,this.width,this.height);
        pop()
    }
}