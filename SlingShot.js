class SlingShot{
    constructor(mybody,mypoint) {
        var options={
            bodyA : mybody,
            pointB : mypoint,
            stiffness: 0.004,
            length : 1
        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }
    fly() {
        this.launcher.bodyA = null;
    }

    display(){
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(5);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}