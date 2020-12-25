class Umbrella {

constructor(x,y,r) {

    var options = {

        isStatic: true

    }

    this.x = x;
    this.y = y;
    this.r = 50;
    this.image = loadImage("images/Walking Frame/walking_1.png");
    this.body = Bodies.circle(x,y,50,options)
    World.add(world,this.body);

}

display() {

    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,pos.x,pos.y + 70,300,300)

}

}