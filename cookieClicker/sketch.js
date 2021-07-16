let cookieImage;

//1. create a variable for your cookie count
let start;
let cookieCount = 0;
let bestClicksPerMinute = 0;
function preload(){
  cookieImage = loadImage("cookie.png");
}

function setup() {
  createCanvas(600, 600);
 alert("press to start timer for one minute. After you press ok, leftclick as fast as you can until the timer stops, then it will tell you your clicks per minute.");
  start = millis();
}

function draw() {
  background(220);
  textSize(32);
  if(millis() - start> 30000){
    alert("Time is up. Your clicks per minute is " + Math.round(cookieCount * 2) + ". To start again, press ENTER.");
    // if(cookieCount > bestClicksPerMinute){
    //   bestClicksPerMinute == cookieCount;
    // }
    noLoop();
  }
 
  if(mouseIsPressed){
    //2. use the image command to draw the cookie: image(cookieImage, 100,100, 360,360);
    image(cookieImage, 100,100, 360,360);
   
  } else {
    //3. draw the cookie a little bigger when the mouse isn't pressed: 
    // image(cookieImage, 100,100);
    image(cookieImage, 100,100,400,400);
  }
  // 4. use the text size to change the text size
  // 5. use the text command to display the word cookies and the cookie count.
  textSize(20)
   text("cookie count "+ cookieCount,20,20 )
}

function mousePressed(){
  // 6. increment the cookie count by 1.
 
   cookieCount++;
}
function keyPressed() {
  if (keyCode === ENTER ) {
    reset()
  } 
}
function reset(){
  setup();
}