
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject= new Roof(400,100,600,70)

	bobDiameter=40

	bobObject1= new Bob(300,500,100, 100)
	bobObject2= new Bob(350,500,100, 100)
	bobObject3= new Bob(400,500,100, 100)
	bobObject4= new Bob(450,500,100, 100)
	bobObject5= new Bob(500,500,100, 100)

	ropeObject1= new Rope(bobObject1.body,roofObject.body, -bobDiameter*2,0)
	ropeObject2= new Rope(bobObject2.body,roofObject.body, -bobDiameter*2,0)
	ropeObject3= new Rope(bobObject3.body,roofObject.body, -bobDiameter*2,0)
	ropeObject4= new Rope(bobObject4.body,roofObject.body, -bobDiameter*2,0)
	ropeObject5= new Rope(bobObject5.body,roofObject.body, -bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();

  roofObject.display();


  drawSprites();
 
}



