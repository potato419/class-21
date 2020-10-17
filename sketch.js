var fixedRect, movingRect, gameObj1, gameObj2, gameObj3, gameObj4;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(800,800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 
gameObj1=createSprite(100,100,50,50);
gameObj1.shapeColor="green";
gameObj2=createSprite(200,100,50,50);
gameObj2.shapeColor="green";
gameObj3=createSprite(300,100,50,50);
gameObj3.shapeColor="green";
gameObj4=createSprite(400,100,50,50);
gameObj4.shapeColor="green";
}

function draw() {
  background(0);  

 movingRect.x=World.mouseX;
 movingRect.y=World.mouseY; 

 if(isTouching(gameObj3,movingRect)){
  movingRect.shapeColor = "blue";
  gameObj3.shapeColor = "blue";
 }
 else{
  movingRect.shapeColor = "green";
  gameObj3.shapeColor = "green";
 }
 
  
  drawSprites();
}

