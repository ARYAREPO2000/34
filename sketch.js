const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var barrierOne;
var barrierTwo;
var barrierThree;
var barrierFour;
var gameOver;
var gameOverImg

function preload(){
gameOverImg = loadImage("./assets/download.png");


}
function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;


  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  barrierOne = createSprite(250,height,width,10)
  barrierTwo = createSprite(500,height/2,10,height)
  barrierThree = createSprite(250,1,width,10)
  barrierFour = createSprite(1,height/2,10,height)

  gameOver = createSprite(width/2,height/2);
  gameOver.addImage("download.png",gameOverImg,);
  gameOver.scale=1
  gameOver.visible = false
  

  


}

function draw() {
  background(59);
  Engine.update(engine);


  ball.show();

  
  
   
   

  if (keyIsDown(LEFT_ARROW)) {
    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:-0.05, y:0});
  }

  if (keyIsDown(RIGHT_ARROW)) {
    Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0.05, y:0});
  }

 if(keyIsDown(UP_ARROW)){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});
 }

 drawSprites()
}

