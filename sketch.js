const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionsHeight = 300;


function setup() {
  createCanvas(500,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,797,480,10);

  for (var i = 0; i <= width; i = i + 80) {
    divisions.push(new Division(i,height - divisionsHeight/2,10,divisionsHeight));
  }

  for(var j = 0; j <= width - 20; j = j + 50) {
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j,375));
  }


  Engine.run(engine);
}

function draw() {
  //background(0,0,205);  
  background(0);

  ground.display();

  if(frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }

for (var i = 0;i < divisions.length; i++) {
  divisions[i].display();
}

for (var j = 0;j < plinkos.length; j++) {
  plinkos[j].display();
}

for (var k = 0; k < particles.length; k++) { 
  particles[k].display(); 
}



  drawSprites();
}