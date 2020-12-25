class Drop {

constructor(x,y,r) {

    var options = {

        friction: 0.1,
        restitution: 0.1,
        isStatic: false

    }

this.x = x;
this.y = y;
this.r = 5;
this.body = Bodies.circle(x,y,5,options);
World.add(world,this.body);

}

updateY(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }
}

showDrop(){
    fill("blue");
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,5)

}

/*display() {

    var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("blue");
        ellipse(0,0,this.r);
        ellipseMode(CENTER);
        pop();


}*/

}