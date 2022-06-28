
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bloco1,bloco2,bloco3;
var engine,world;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var plane_options={
		isStatic: true
	}
    plane = Bodies.rectangle(600,580,1200,2,plane_options)
	World.add(world,plane)
	var blocoOptions = {
		restitution:0.5,
		frictionAir:0.3
	}

	bloco1 = Bodies.circle(220,10,10,blocoOptions)
	World.add(world,bloco1)
	bloco2 = Bodies.rectangle(346,27,89,120,blocoOptions)
	World.add(world,bloco2)

	Engine.run(engine);
    rectMode(CENTER);
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rect(plane.position.x,plane.position.y,1200)
  ellipse(bloco1.position.x,bloco1.position.y,10)
  rect(bloco2.position.x,bloco2.position.y,89,120)
  drawSprites();
 
}



