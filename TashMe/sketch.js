// 1. How to load an image into this sketch
//    a. First, go to File > Duplicate.
//    b. find the image (use google to search)
//    c. Right click on the image and select 'Save image As'
//    d. Rename the image something short (e.g. face.jpg)
//    e. Save the image to your computer's desktop
//    f. Click the > under the play button
//    g. Click the dropdown near 'Sketch Files'
//    h. Click upload file


// These 2 lines of code create variables to hold your face picture and a mustache.
// You will use these later.
let face;
let mustache;

function setup() {
  createCanvas(500, 500);
}

function preload() {
  // 2. The code below loads your face picture into the program.
  //     Make sure the file name is correct for the face image you saved earlier
  face = loadImage(
    "image.jpeg"
  );

  // 3. Set the size of the sketch. Make it big enough to show the face you chose.

  // 4. Resize the face so it is the same size as the sketch
  face. resize(500,500)
  // 5. Find an image with a mustache and paste the link here.
  mustache = loadImage(
    "mustache.png"
  );
}

function draw() {
  // 6. DRAW FACE.    Use the background() command to make the face the background of the sketch
background(face)
  //    Run the program to see if the face is drawn. Get this working before you go on.

  // 7. DRAW MUSTACHE. Use the image() command to draw the mustache.
  image(mustache,mouseX,mouseY)
  // The image command looks like this: image(mustache, 200, 200);

  
  //    The numbers specify where to draw the mustache. They represent the top left corner of the image
  //    Run the program to see if the mustache is drawn on the face. Get this working before you go on.
  //    If you need to resize the mustache, do it in the setup() method after you loaded the mustache image.

  // 8.  MOVE.  Change the DRAW MUSTACHE code to use      mouseX, mousY      in place of the numbers.
  //     Run the program to see the mustache move around when you move the mouse.

  
  
  
  // OPTIONAL:
  //     Add an if statement so the mustache is only drawn when the mouse is clicked.
  //     Add or subtract from mouseX and mouseY when you draw the mustache, so the mustache center appears where the mouse pointer is
  //     Draw a hat on the sketch when the right mouse button is pressed. Use this code.
  //               if (mouseButton == RIGHT)  {     }

}
