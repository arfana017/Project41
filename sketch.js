const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var lightning,l1,l2,l3,l4;
var drops = [];
var rand;
var maxDrops = 100;
var lightningFrame = 0;

function preload(){
    
    l1 = loadImage("images/thunderbolt/1.png");
    l2 = loadImage("images/thunderbolt/2.png");
    l3 = loadImage("images/thunderbolt/3.png");
    l4 = loadImage("images/thunderbolt/4.png");

}

function setup(){
   createCanvas(400,700);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200,500);

   if(frameCount % 150 === 0) {
    for(var i = 0; i < maxDrops;i++)
    drops.push(new Drop(random(0,400),random(0,400)))
 }
    
}

function draw(){

    Engine.update(engine); 
    background("black");

    rand = Math.round(random(1.4))
    if(frameCount % 80 === 0){
        lightningFrame = frameCount;
        lightning = createSprite(random(10,370),random(10,30),50,90)
        switch(rand){
            case 1: lightning.addImage(l1)
                break;
            case 2: lightning.addImage(l2)
                break;
            case 3: lightning.addImage(l3)
                break;
            case 4: lightning.addImage(l4)
                break;
                default: break;
        }
        lightning.scale = random(0.5,0.6)
    }
    if(lightningFrame + 10 === frameCount && lightning){
        lightning.destroy();
    }
    umbrella.display();
    for(var i = 0; i < maxDrops ; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();

}   

