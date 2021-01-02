
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1 ,ground1 ,d1 ,d2 ,d3;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1 = new Paper(200,590,50);
	ground1 = new Ground(700,595,1400,10);
	d1 = new Dustbin(800,595,10,60);
	d2 = new Dustbin(810,595,60,10);
	d3 = new Dustbin(870,595,10,60);

	Engine.run(engine);
  
}


function draw() {
  background("black");
  paper1.display();
  ground1.display();
  d1.display()
  d2.display()
  d3.display()
}



