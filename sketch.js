/***********************************************************************************
	SimpleStateMachine - TEMPLATE
	by Scott Kildall

  SimpleStateMachine + Splash + Instructions screen
  by Katrina Monje

  Addition:
  Create a new state called drawSplash; also add splash.png

  (1) Upon startup, go to the state
  (2) When the mouse is clicked, go to drawOne

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works — you don't need to know this for the template use
	* array of images gets loaded at startup
	* drawFunction is a VARIABLE that points to a function varible name
	* drawOne(), drawTwo(), etc. are set to be functions.
	* the the keys 1-5 will change the drawFunction variable

------------------------------------------------------------------------------------
	Notes:
	- a more advanced state machine with use array-indexing for each of
		images the draw functions, but this is just for illustrative purposes

	- even more advanced will be to put the draw functions into an array, would
		be helpful for randomizing, go to the next function, etc

	- next step after that would be to put interfaces into an array that maps to
		the functions


***********************************************************************************/

// Array of images
var images = [];

// Array of strings
var strings =[];
var midX
var startY;
var lineHeight = 24;

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  images[0] = loadImage('assets/calm.png');
  images[1] = loadImage('assets/energized.png');
  images[2] = loadImage('assets/inspired.png');
  images[3] = loadImage('assets/excited.png');
  images[4] = loadImage('assets/hopeful.png');
  images[5] = loadImage('assets/splash.png');
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set variables for array
  midX = width/2;
  startY = 60;

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(24);

 // Array for instructions screen
  loadArray();

  // set to splash for startup
  drawFunction = drawSplash;
}

// Very simple, sets the background color and calls your state machine function
function draw() {
  background(255);

  // will call your state machine function
  drawFunction();
}

//========= TEMPLATE: modify these functions, INSIDE the function blocks only =========

//-- drawOne() will draw the image at index 0 from the array
drawOne = function() {
   image(images[0],width/2, height/2);

   fill(0,0,0);
   text("calm", width/2, height - gTextOffset);
}

//-- drawTwo() will draw the image at index 1 from the array
drawTwo = function() {
   image(images[1],width/2, height/2);

   fill(240,120,0);
   text("energized", width/2, height - gTextOffset);
}

//-- drawThree() will draw the image at index 2 from the array
drawThree = function() {
   image(images[2],width/2, height/2);

   fill(40,230,120);
   text("inspired", width/2, height - gTextOffset);
}

//-- drawFour() will draw the image at index 3 from the array
drawFour = function() {
   image(images[3],width/2, height/2);

   fill(255,255,178);
   text("excited", width/2, height - gTextOffset);
}

//-- drawFive() will draw the image at index 4 from the array
drawFive = function() {
   image(images[4],width/2, height/2);

   fill(230,50,50);
   text("hopeful", width/2, height - gTextOffset);
}

//-- drawSplash() will draw the image at index 4 from the array
drawSplash = function() {
   image(images[5],width/2, height/2);

  fill(230,50,50);
   text("refresh mood!", width/2, height - gTextOffset);   
}

// Draw the strings from the array
drawInstructions = function() {
  background(0);

  fill(255);
  for( let i = 0 ; i < strings.length; i++) {
        text( strings[i], midX, startY + (i * lineHeight) )
  }
}

function loadArray() {
  strings[0] = "Press 1 for a calm mood";
  strings[1] = "Press 2 for an energized mood";
  strings[2] = "Press 3 for an inspired mood";
  strings[3] = "Press 4 for an excited mood";
  strings[4] = "Press 5 for a hopeful mood";
  strings[5] = "Press s to refresh mood";
}

//========= TEMPLATE: add or change interface functions, as you like =========

// Change the drawFunction variable based on your interaction
function keyTyped() {
  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }
  else if( key === 's' ) {
    drawFunction = drawSplash;
  }
}

function mousePressed() {
  if( drawFunction === drawSplash ) { 
    drawFunction = drawInstructions;
  }
}