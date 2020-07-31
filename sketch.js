var backgroundSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  backgroundSprite = createSprite(240,400,460,780);
  backgroundSprite.shapeColor = (0);

  ground = new Ground(240,400,460,10);
  
  Engine.run(engine);
}

function draw() {
  background(149,234,243);  

  ground.display();

  drawSprites();
}