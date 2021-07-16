let rocketshipX = 200;
let rocketshipY = 200;
let Yvelocity = -0.1;
let gravity = 0.5;
function setup() {
  createCanvas(400, 400);
  
  
  
}

function draw() {
  
  background(0,0,0);
  fill(255,255,255)
  Yvelocity+=gravity;
  textSize(10);
  text("velocity = " + Math.round(Yvelocity) , 300,10)
  rect(0,361,400,400);
  fill(255,0,0)
  rect(rocketshipX, rocketshipY, 30,50)
  if(rocketshipY >= 320){
    
    noLoop();
     if(Yvelocity < 7){
       textSize(40);
       text("You Landed!",100,200);
     }else{
       textSize(40)
       text("You Crashed",100,200)
     }}
  if(mouseIsPressed == true){
    Yvelocity = -1 + gravity;
  }
  rocketshipY = rocketshipY + Yvelocity;
}
function keyReleased(){
  
  if(keyCode == ENTER){
    
     rocketshipX = 200;
 rocketshipY = 200;
    Yvelocity = -0.1;
 gravity = 0.5;
    loop();
    
    
  }
}

