const Engine = Matter.Engine;
const World=   Matter.World;
const Bodies = Matter.Bodies;
var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:100,y:200});
ImageMode(CENTER);
image(polyon_img,polygon.position.x,poygon.position.y,40,40)

  ground = new Ground(600,height,1200,20);
  ground1 = new Ground(180,height,200,20);
  ground2 = new Ground(240,height,200,20); 
  box1 =  new Box (260,270,30,40);
  box2 =  new Box (280,270,30,40);
  box3 =  new Box (300,270,30,40);
  box4 =  new Box (320,270,30,40);
  box5 =  new Box (340,270,30,40);

  box6 = new Box (280,230,30,40);
  box7 = new Box (300,230,30,40);
  box8 = new Box (320,230,30,40);

  box9 = new Box (300,190,30,40);


  box10 = new Box (160,170,30,40);
  box11 = new Box (140,170,30,40);
  box12 = new Box (120,170,30,40);
  box13 = new Box (100,170,30,40);
  box14 = new Box (90,170,30,40);

  box15 = new Box (140,210,30,40);
  box16 = new Box (120,210,30,40);
  box17 = new Box (100,210,30,40);

  box18 = new Box (120,250,30,40);

}

function draw() {

  background(255,255,255);
  ground.display();  
  ground1.display();
  ground2.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(this.polygon);
  }
}