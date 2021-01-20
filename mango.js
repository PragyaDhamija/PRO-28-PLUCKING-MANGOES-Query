class mango {
    constructor(x,y,radius) {
        var options={
            isStatic : true,
            restitution : 0,
            friction : 1,
        }
        this.image = loadImage("mango.jpg")
        this.body = Bodies.circle(this.x,this.y,this.radius,options)
        World.add(world,this.body);
    }

    display() {
        var posM = this.body.position;
        var angM = this.body.angle
        push()
        translate(posM.x, posM.y);
        rotate(angM)
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.radius*2, this.radius*2)
        pop()
    }
}