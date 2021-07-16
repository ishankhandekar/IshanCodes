let rocketX = 400;
let rocketY = 600;

function setup() {
    createCanvas(800, 800);
}

function draw() {
  background(0, 0, 40);
  fill(255, 255, 255);
  // 1. ▼ Write code BELOW this line to make stars ▼ 
  //    Example:
  //     circle(50, 50, 50);
rocketY+10;


  

  fill(random(255), 0, 0);
  circle(rocketX, rocketY + 130, 90);
  fill(248, 128, 0);
  circle(rocketX, rocketY + 115, 70);
  fill(255, 153, 0);
  circle(rocketX, rocketY + 95, 35);
  fill(100, 100, 100);
  triangle(rocketX, rocketY + 10, rocketX + 50, rocketY + 100, rocketX - 50, rocketY + 100);
  // 2. ▼ Write code BELOW this line to make the rocket blast off ▼ 
  rocketY -= 10;
  
  
  
  
}
function keyPressed(){
  if(keyCode == ENTER){
    rocketX = 400;
    rocketY = 600;
  }
}