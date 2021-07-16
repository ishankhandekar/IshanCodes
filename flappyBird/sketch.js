//Run the code to view the instructions
let birdX = 200;
let birdY = 300;
let birdYVelocity = 0;
let gravity = 0.2;
let pipeX1;
let pipeY1;
let pipeX2;
let pipeY2;
let pipeGap = 150;
let upperPipeHeight;
let lowerY;
let birdImage;
let gameOver = false;
let score = 0;
let pipeSpeed = 0.25;
let bestScore = 0;
function preload() {
  birdImage = loadImage("./flappybird.png")
}

function intersectsPipes() {
  if (birdY < upperPipeHeight - 5 && birdX > pipeX1 && birdX < (pipeX1 + 100)) {
    return true;
  }
  else if (birdY >= lowerY - 30 && birdX > pipeX2 && birdX < (pipeX2 + 80)) {
    return true;
  }
  else { return false; }
}
function setup() {
  upperPipeHeight = random(100, 400);
  createCanvas(400, 600)

  pipeX1 = 400;
  pipeY1 = 0;
  pipeX2 = 400;
  pipeY2 = 400;
  teleportPipes();

}

function draw() {

  background(0, 0, 255);

  fill(0,255,0);
  lowerY = upperPipeHeight + pipeGap;
  birdYVelocity += gravity;
  rect(pipeX1, pipeY1, 100, upperPipeHeight);
  rect(pipeX2, lowerY, 100, 400);
  birdY = birdY + birdYVelocity;
  pipeX1 -= pipeSpeed;
  pipeX2 -= pipeSpeed;
  fill(255, 255, 0)
  stroke(255, 255, 0);
  //ellipse(birdX,birdY,40,40);
  image(birdImage, birdX - 50, birdY - 50, 100, 100);
  fill(255, 255, 255)
  textSize(25)
  text("Score is " + Math.round(score) + ". Highscore is " + bestScore, 20, 20);
  teleportPipes();

  score += 0.1;
  if (score % 50 <  .01) {
    pipeSpeed += 1;
  }
  if (intersectsPipes() == true || birdY > 600) {
    if(score > bestScore){
      bestScore = Math.round(score);
    }
    score = 0;
    pipeSpeed = 0.25;
    alert("GAME OVER")
    noLoop();
    gameOver = true;
  }

}
if (gameOver == true && keyIsPressed == true) {
  reset();
}
function mousePressed() {
  birdYVelocity = -5;

}
function keyPressed() {
  if (keyCode === ENTER && gameOver == true) {
    reset()
  }
}
function teleportPipes() {

  if (pipeX1 <= -100) {
    rect(pipeX2, pipeY2, 100, 200);
    upperPipeHeight = random(100, 400);
    pipeX1 = 400;
    pipeX2 = 400
  }

}
function reset() {

  birdX = 200;
  birdY = 300;
  birdYVelocity = 0;
  gravity = 0.2;
  setup();
  loop();
}





