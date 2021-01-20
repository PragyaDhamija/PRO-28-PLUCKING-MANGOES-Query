
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var treeO,stoneO,groundO,sling;
var world;
var boy;

function preload(){
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneO = new stone(235,420,30);

	m1 = new mango(900,160,40)
	m2 = new mango(900,230,40)
	m3 = new mango(1100,100,30)
	m4 = new mango(1000,70,30)
	m5 = new mango(1140,150,40)
	m6 = new mango(1010,140,30)
	m7 = new mango(1100,230,40)
	m8 = new mango(1100,70,30)
	m9 = new mango(1200,200,40)
	m10 = new mango(1120,50,40)

	treeO = new tree(1050,580);

	groundO = new ground(width/2,600,width,20);

	sling = new SlingShot(stone.body,{x : 235, y : 420})

	detectCollision(stoneO, m1);
	detectCollision(stoneO, m2);
	detectCollision(stoneO, m3);
	detectCollision(stoneO, m4);
	detectCollision(stoneO, m5);
	detectCollision(stoneO, m6);
	detectCollision(stoneO, m7);
	detectCollision(stoneO, m8);
	detectCollision(stoneO, m9);
	detectCollision(stoneO, m10);

	var render = Render.create({
		element : document.body,
		engine : engine,
		options : {
			width : 1300,
			height : 600,
			wireframes : false,
		}
	})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  textSize(20);
  text("Press Space key to get a Second Chance to play!!! ",50,50);
  image(boy,200,340,200,300);
  
  drawSprites();
  keyPressed();
  detectCollision();
 
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneO.body,{x:235, y:420})
		launcherObject.attach(stoneO.body);
	}
}
function detectCollision(Lstone,Lmango) {
	MBP = lmango.body.setPosition
	SBP = lstone.body.setPosition

	var distance=dist(SBP.x, SBP.y, MBP.x, MBP.y)
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
}

