
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var gunman;
var virus,virusGroup
var human,humanGroup
function preload(){
  bg_img = loadImage("assets/bg_1.jpg")
}

function setup() {
  createCanvas(1600,800);

  engine = Engine.create();
  world = engine.world;
  gunman = createSprite(100,700,10,10);
  virus = new Virus(500,500,10,10);
  virusGroup = new Group()
  human = new Human(600,500,10,10)
  humanGroup = new Group()

  
}


function draw() 
{
  background(bg_img);
  Engine.update(engine);

  virus.display();
  human.display();
  drawSprites()
  
  
}

