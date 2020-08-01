const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight = 300;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);

  /*for (var i = 0; i <= width; i = i + 80) {
    divisions.push(new Division(i,height - divisionsHeight/2,10,divisionsHeight));
  }*/

  Engine.run(engine);
}

function draw() {
  //background(0,0,205);  
  background(0);

  ground.display();



  drawSprites();
}