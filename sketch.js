
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var ground;
var ball1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbin1 = new Dustbin(570,670,170,20);
    dustbin3 = new Dustbin(665,630,20,100);
    dustbin4 = new Dustbin(475,630,20,100);
    ground = new Ground(400,685,1000,20);
    ball1 = new Ball(400,350,20,20);
    
	Engine.run(engine);
   keyPressed()
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    dustbin1.display();
    dustbin3.display();
    dustbin4.display();
    ground.display();
    ball1.display();
    
  drawSprites();
 
}





