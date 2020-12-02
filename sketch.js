var fixedRect;
var moveingRect;



function setup() {
   createCanvas(800,400);
   fixedRect = createSprite(200,200,50,50);
   fixedRect.shapeColor = "Green";
   moveingRect = createSprite(400, 200, 50, 50);
   moveingRect.shapeColor = "Green";
}

function draw() {
  background(0,0,0);  
 moveingRect.x = World.mouseX;
 moveingRect.y = World.mouseY;
 //console.log(moveingRect.x-fixedRect.x);
 if(moveingRect.x-fixedRect.x<fixedRect.width/2+moveingRect.width/2 && fixedRect.x-moveingRect.x<fixedRect.width/2+moveingRect.width/2 && moveingRect.y-fixedRect.y<fixedRect.width/2+moveingRect.width/2 && fixedRect.y-moveingRect.y<fixedRect.width/2+moveingRect.width/2 ){
  fixedRect.shapeColor = "red";
  moveingRect.shapeColor = "red";
 }
 else{
  fixedRect.shapeColor = "Green";
  moveingRect.shapeColor = "Green";
  

 }
  drawSprites();
}