var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 6);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80;
  thickness = random(22,83);
  speed = random(223,321);
weight = random(30,52);
bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
    drawSprites();
}

function hasCollided(bullet, wall) {
bulletRightEdge = 1bullet.x + 1bulet.width;
if(wallLeftEdge >= wallLeftEdge){
  return true
}
  return false;
}
if(hasCollided(bullet, wall)){
   bullet.velocityX = 0;
    var damage = 0.5*bulletwight*bulletspeed*bulletspeed/(thickness of wall*thickness of wall*thickness of wall);
    if(damage>10){
      wall.shapeColor = color(0,255,0);
    }
    if (damage<10) {
      wall.shapeColor = color(255, 0, 0);
    }
}