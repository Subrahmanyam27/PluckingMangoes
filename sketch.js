
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeObj,groundObj,stoneObj;
var mango1,mango2,mango3,mango4,mango5,mango6;
var launcher,boyimg;

function preload(){
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	treeObj = new tree(900,450);
	groundObj = new ground();
	stoneObj = new stone(100,50);

	mango1 = new mango(900,300);
	mango2 = new mango(800,400);
	mango3 = new mango(710,360);
	mango4 = new mango(810,230);
	mango5 = new mango(1020,350);
	mango6 = new mango(960,230);

	launcher = new sling(stoneObj.body,{x:190,y:610});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  textSize(30);
  text("Press Space to get SecondChance!!",20,50);

  treeObj.display();
  groundObj.display();
  stoneObj.display();

  imageMode(CENTER);
  image(boyimg,250,680,200,300);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  launcher.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.width+lstone.width){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		launcher.attach(stoneObj.body);
	}
}
