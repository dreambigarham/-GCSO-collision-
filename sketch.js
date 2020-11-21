var speed, weight;

function setup() {  
  speed = random(-300,90)
  weight = random(400,1500);
  
  car=createSprite(1200,90,50,20)  
  createCanvas(1600,400);
  car.shapeColor="red"
  car.velocityX=speed;
  wall=createSprite(50,150,3000,10);
  wall2=createSprite(10,100,20,200);


}
function draw() {
  background(0);  
  drawSprites();
  if(car.collide(wall2))
  {
    car.velocityX = 0;
    var deformation = 0.5*speed*weight*speed/22500;
    if(deformation > 180 )
    {
      car.shapeColor = color(255,0,0);
    }
    if( (deformation < 180 ) && (deformation > 100 ) )
    {
      car.shapeColor = color(233,233,0);
    }
 
    if(deformation < 100 )
    {
      car.shapeColor = color(0,255,0);
    }
  }
}