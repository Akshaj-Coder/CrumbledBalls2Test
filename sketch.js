const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var world;
var PaperObject;
var groundObject;
var dustbinObj;

var dustbinimg;
var paperimg;

function preload() {
	paperimg = loadImage("paper.png");
	
	dustbinimg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Dustbin(1200,650);

	PaperObject=new paper(200,450,70);
	//Create A ground
	groundObject=new Ground(width/2,670,width,20);
	

	
/*	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});  */

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  Engine.update(engine);
 
  dustbinObj.display();
  PaperObject.display();
  groundObject.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
  
		Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85});
	  
	}
}
  
