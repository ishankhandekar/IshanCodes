let face;

function preload(){
  // 1. On the line below, change the link to one you want to use, or just use Tom!
  face = loadImage("https://pbs.twimg.com/profile_images/787691804787343362/avONcVAS.jpg");
}

function setup(){

  
  // 2. Run your program.  Is the face stretched?
  // Fix the numbers below so the face looks good
  createCanvas(600, 600);
  
  face.resize(width,height);
  background(face);
}


function draw() {
  console.log(mouseX,mouseY)
  // 4. Give the eyes a color by using fill(red, green, blue);
  
  fill(mouseY,mouseX,200)
  // (use numbers in place of red, green, blue)
  // Example: fill(255, 10, 200);
  
  // 3. Use circle(x, y, size) to put two BIG eyes on the face
  // Example: circle(100, 50, 80);
 circle(199,266,40);
circle(336,252,40)
  // 5. Use mouseX and mouseY to change the color of the irises when the mouse moves
  // hint: mouseX is a int variable, so you can use it anywhere you're using a number
  // hint: you will be changing the fill command you wrote in step 4
  
  // 6. Draw black pupils on top of the eyes.
  fill(0,0,0)
  circle(199,266,10)
  circle(336,252,10)
}