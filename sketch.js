function setup() {
  createCanvas(800,400);

  moving = createSprite(40,20,50,40);
  fixed = createSprite(400,200,45,50);
  
  moving.shapeColor = "Black";
  fixed.shapeColor = "Black";

  fixed.debug = "true";
  moving.debug = "true";

}

function draw() {
  background(5,100,255);  

  moving.y = World.mouseY;
  moving.x = World.mouseX;

  if ((moving.x - fixed.x) < (fixed.width/2 + moving.width/2)
   && (fixed.x - moving.x) < (fixed.width/2 + moving.width/2))
   {
    moving.velocityX = moving.velocityX *(-1);
    fixed.velocityX = fixed.velocityX *(-1);
   }
   if ((moving.y - fixed.y) < (fixed.height/2 + moving.height/2)
   (fixed.y - moving.y) < (fixed.height/2 + moving.height/2))
    
    {
      moving.velocityY = moving.velocityY *(-1);
      fixed.velocityY = fixed.velocityY *(-1);
  }
 

  drawSprites();
}