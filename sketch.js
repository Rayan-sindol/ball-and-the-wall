var ball,wall,car,road;



function setup() {
  createCanvas(displayWidth,displayHeight);
  ball = createSprite(400, 100, 50, 80);
  ball.shapeColor = "green";
ball.debug = false;
wall = createSprite(400, 800, 80, 30);
wall.shapeColor = "green";
wall.debug = false;
road=createSprite(400,150,100,200)

}

function draw() {
  background(0,0,0);
  ball.x = World.mouseX;
  ball.y = World.mouseY;
  if(touching(ball,wall)){
wall.shapeColor = "blue";
wall.width = 30;

  }
  else{
    wall.shapeColor="green"
    wall.width=80;
    ball.shapeColor="red";
  }
  if(touching(ball,road)){
road.shapeColor="pink"
road.width=400;
  }
  else{
    road.shapeColor="green";
  road.width=100;
  }

  drawSprites();
}








