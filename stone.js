class stone{
    constructor(x,y,radius) {
        var options={
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.image = loadImage("stone.png")
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options)
        World.add(world,this.body);
    }

    display() {
        var posS = this.body.position;

        push()
        translate(posS.x,posS.y);
        fill(255,0,255);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.radius*2,this.radius*2)
        pop()
    }
}