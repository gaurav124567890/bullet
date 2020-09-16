var bullet,wall,speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400)
speed = random (223,321)
thickness = random (22,83)
weight = random (30,53)
bullet = createSprite (50,200,50,50)
bullet.velocityX = speed
bullet.shapeColor = "white"
wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor = "gray"
}

function draw() {
  
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0
    var  deformation = 0.5 * weight * speed * speed/(thickness*thickness*thickness)
    if(deformation>10){
      bullet.shapeColor = "red"
    }
   
    if(deformation<10){
      bullet.shapeColor = "green"
    }
   
  }
  
  drawSprites();
}
function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge = Lbullet.x +Lbullet.width;
  wallLeftEdge = Lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
