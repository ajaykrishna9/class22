const engine=Matter.Engine
const World=Matter.World
const bodies=Matter.Bodies
var myengine,myworld,ground,ball
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
myengine=engine.create()
myworld=myengine.world
var ground_options={
  isStatic:true
}
ground=bodies.rectangle(112,390,700,20,ground_options)
World.add(myworld,ground)
var ball_options={
  restitution:2.0
}



ball=bodies.circle(145,246,20,ball_options)
World.add(myworld,ball)
}

function draw() {
  background(255,255,255); 
  engine.update(myengine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,700,20) 
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
 // drawSprites();
}