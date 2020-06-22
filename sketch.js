var fixedRect, movingRect,ob1,ob2,ob3,ob4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;

ob1=createSprite(100,400,50,50)
ob2=createSprite(300,400,50,50)
ob3=createSprite(800,400,50,50)
ob4=createSprite(1000,400,50,50)


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
 ob1.shapeColor="green"
 ob2.shapeColor="green"
 ob3.shapeColor="green"
 ob4.shapeColor="green"

   
  if (isTouching(movingRect,fixedRect))
  {movingRect.shapeColor="Red"
  fixedRect.shapeColor="red"
}
if (isTouching(movingRect,ob1))
{movingRect.shapeColor="Red"
ob1.shapeColor="red"
}
if (isTouching(movingRect,ob2))
{movingRect.shapeColor="Red"
ob2.shapeColor="red"
}
if (isTouching(movingRect,ob3))
{movingRect.shapeColor="Red"
ob3.shapeColor="red"
}
if (isTouching(movingRect,ob4))
{movingRect.shapeColor="Red"
ob4.shapeColor="red"
}
isTouching
  drawSprites();
}

function isTouching(a,b)
{
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
 return true;
}
else {
return false
}

}
