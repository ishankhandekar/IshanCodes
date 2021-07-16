//Run this program to view instructions
let score = 0;
let foodX = 100;
let foodY = 20;
function setup() {
  createCanvas(400, 400);
  
  
}
function checkCatch( x, y){
  
     if(x > mouseX && x < mouseX+70){
          if(y > mouseY-17 && y < mouseY+30){
               score++;
               foodY = 20; //if the food was eaten, make more food fall from the top
               foodX = random(width-20);
          }
     }
     else if (foodY > height && score > 0){
          score--;
     }
}
function draw() {
  print("mouseX"+mouseX);
  
  background(220);
  fill(0, 0, 0);
textSize(16);
text("Score: " + score, 20, 20);
  
  drawFish(mouseX + 100);
  if(foodY > 400){
    foodX = random(0,400);
    foodY = 20;
  fill(0,255,0);
  noStroke();
  fill(255,0,0);
  ellipse(foodX,foodY, 10,10 )}
    checkCatch(foodX,foodY);
  
  
noStroke();
fill(255,0,0);
ellipse(foodX,foodY, 10,10);
foodY++;
}
 
  


function drawFish(mx){

     noStroke();
     fill(255,255,255);
     ellipse(mx-17,mouseY-17,20,20); //back side eye
     fill(255,200,88);
     ellipse(mx,mouseY,90,50); //body
     triangle(mx+30,mouseY,mx+70,mouseY+30,mx+70,mouseY-30); //tail
     stroke(0);
     triangle(mx,mouseY,mx+15,mouseY+10,mx+15,mouseY-10); //side fin
     noStroke();
     fill(255,200,88);
     ellipse(mx,mouseY,15,15); //side fin cover
     noStroke();
     fill(255,255,255);
     ellipse(mx-25,mouseY-15,20,20); //front eye
     fill(0,0,0);
     ellipse(mx-25,mouseY-15,5,5); //pupil
     fill(141,233,237);
     ellipse(mx-45,mouseY,25,25); //mouth
}
