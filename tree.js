class tree {
    constructor(x,y) {
        this.width = 450;
        this.height = 600;
        this.thickness = 10;

        this.image = loadImage("tree.png")
        this.body = Bodies.rectangle(this.x,this.y,this,width,this,height)
   
   
   World.add(world,this.body)
   
   
    }

    display() {
        var posB = this.body.position;
        push()
        translate(posB.x,posB.y+10);
        fill(255)
        imageMode(CENTER);
        image(this.image,0,0)
        pop()
    }
}