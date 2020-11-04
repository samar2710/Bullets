var bullet;
var wall;
var speed,thickness;
var weight;
var damage;
function setup(){
  createCanvas(1200,400);
  thickness=random(22,83);
  wall=createSprite(1000,200,thickness,height/2);
  bullet=createSprite(50,200,50,5);
  wall.shapeColor=(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  damage=(0.5*weight*speed*speed/(thickness*thickness*thickness));
}

function draw(){
  background(0);  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  if(damage<10){
    wall.shapeColor=color(255,0,0);

  }
  if(damage>10){
    wall.shapeColor="red";
  }
}
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true

  }
  return false;

}