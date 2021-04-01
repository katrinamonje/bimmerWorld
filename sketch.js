/***********************************************************************************
  BimmerWorld
  by Katrina Monje


  (1) Upon startup, go to the state
  (2) When the mouse is clicked, go to drawOne

	Template:

	(1) Add your own PNG files in the assets folder. Make sure they match the names ***exactly*** of the existing PNGs.
	(2) Add custom drawing code to drawOne(), drawTwo(), drawThree(), drawFour(), drawFive()
	(3) You can add your own interfaces - keys, mouse events, etc in the Interfaces section

	Also start your localhost before running this, otherwise no PNGs will display

------------------------------------------------------------------------------------
	The way it works 
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

// Global Variables

let xCenter = width/2;
let yCenter = height/2:

// 2D Arrays for all images and textcopies
var assets = [][];
var textboxes = [][];

// Screens (states)

let excitingNews = 0;
let narrativeIntroduction = 1;
let chooseCaptionBrandish = 2;
let chooseCaptionHeartfelt = 3;
let captionBrandish = 4;
let captionHeartfelt = 5;
let lotsOfAttention = 6;
let noAttention = 7;
let chooseIGStoryBrandish = 8;
let chooseIGstoryHeartfelt = 9;
let deletePostOption = 10;
let brandishIGStory = 11;
let heartfeltIGStory = 12;
let sadComment = 13;
let happyComment = 14;
let deletePostOptionYes = 15;
let deletePostOptionNo = 16;
let happyText = 17;
let happyCommentTwo = 18;
let emotionMeter = 19;
let emotionMeterMeh = 20;
let emotionMeterHappy = 21;
let emotionMeterExcited = 22;
let emotionMeterSad = 23;
let emotionMeterAnxious = 24;
let messageHappy = 25;
let messageMeh = 26;
let messageSad = 27;
let playAgain = 28;

// Displays splash screen
var currentScreen = hook;

// Assets (images), indexed in order of appearance

let enterKey = 0;
let selfie = 1;
let keys = 2;
let arrowKey = 3;
let chooseCaptionBrandish = 4;
let chooseCaptionHeartfelt = 5;
let captionBrandish = 6;
let captionHeartfelt = 7;
let notifications = 8;
let noNotifications = 9;
let chooseIGStoryBrandish = 10;
let chooseIGStoryHeartfelt = 11;
let yKey = 12;
let nKey = 13;
let deletePostOption = 14;
let brandishIGStory = 15;
let heartfeltIGStory = 16;
let sadComment = 17;
let happyComment = 18;
let happyText = 19;
let happyCommentTwo = 20;
let emotionMeter = 21;
let emotionMeterMeh = 22;
let emotionMeterHappy = 23;
let emotionMeterExcited = 24;
let emotionMeterSad = 25;
let emotionMeterAnxious = 26;
let messageBackground = 27;

// Properties of images

let file = 0;
let x = 1;
let y = 2; 

assets[enterKey] = ['assets/enterKey.png', xCenter, yCenter];
assets[selfie] = ['assets/selfie.png', xCenter, yCenter];
assets[keys] = ['assets/keys.png', xCenter, yCenter];
assets[arrowKey] = ['assets/arrowKey.png', xCenter, yCenter];
assets[chooseCaptionBrandish] = ['assets/chooseCaptionBrandish.png', xCenter, yCenter];
assets[chooseCaptionHeartfelt] = ['assets/chooseCaptionHeartfelt.png', xCenter, yCenter];
assets[captionBrandish] = ['assets/captionBrandish.png', xCenter, yCenter];
assets[captionHeartfelt] = ['assets/captionHeartfelt.png', xCenter, yCenter];
assets[notifications] = ['assets/notifications.png', xCenter, yCenter];
assets[noNotifications] = ['assets/noNotifications.png', xCenter, yCenter];
assets[chooseIGStoryBrandish] = ['assets/chooseIGStoryBrandish.png', xCenter, yCenter];
assets[chooseIGStoryHeartfelt] = ['assets/chooseIGStoryHeartfelt.png', xCenter, yCenter];
assets[yKey] = ['assets/yKey.png', xCenter, yCenter];
assets[nKey] = ['assets/nKey.png', xCenter, yCenter];
assets[deletePostOption] = ['assets/deletePostOption.png', xCenter, yCenter];
assets[brandishIGStory] = ['assets/brandishIGStory.png', xCenter, yCenter];
assets[heartfeltIGStory] = ['assets/heartfeltIGStory.png', xCenter, yCenter];
assets[sadComment] = ['assets/sadComment.png', xCenter, yCenter];
assets[happyComment] = ['assets/happyComment.png', xCenter, yCenter];
assets[happyText] = ['assets/happyText.png', xCenter, yCenter];
assets[happyCommentTwo] = ['assets/happyCommentTwo.png', xCenter, yCenter];
assets[emotionMeter] = ['assets/emotionMeter.png', xCenter, yCenter];
assets[emotionMeterMeh] = ['assets/emotionMeterMeh.png', xCenter, yCenter];
assets[emotionMeterHappy] = ['assets/emotionMeterHappy.png', xCenter, yCenter];
assets[emotionMeterExcited] = ['assets/emotionMeterExcited.png', xCenter, yCenter];
assets[emotionMeterSad] = ['assets/emotionMeterSad.png', xCenter, yCenter];
assets[emotionMeterAnxious] = ['assets/emotionMeterAnxious.png', xCenter, yCenter];
assets[messageBackground] = ['assets/messageBackground.png', xCenter, yCenter];

// Textcopies

let standardTextSize = 50;
let standardTextColor = color(#ffffff);

let hook = 0;
let narrativeIntro = 1;
let chooseCaptionPost = 2;
let greatChoice = 3;
let notifications = 4;
let tooCheesy = 5;
let chooseCaptionStory = 6;
let deletePostQuestion = 7;
let deletePostAnswers = 8;
let finallyDreamCar = 9;
let finallyHardWork = 10;
let storyResponseSad = 11;
let storyResponseHappy = 12;
let cringe = 13;
let keepPost = 14;
let textResponseHappy = 15;
let commentResponseHappy = 16;
let emotionMeterQuestion = 17;
let messageHappy1 = 18;
let messageMeh2 = 19;
let messageSad3 = 20;
let resetGame = 21;

//Properties of textcopies

let content = 0;
let color = 1;
let size = 2
let x = 3;
let y = 4;

textboxes[hook] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[narrativeIntro] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[chooseCaptionPost] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
  textboxes[greatChoice] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[notifications] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[tooCheesy] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[chooseCaptionStory] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[deletePostQuestion] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[deletePostAnswers] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[finallyDreamCar] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[finallyHardWork] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[storyResponseSad] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[storyResponseHappy] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[cringe] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[keepPost] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[textResponseHappy] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[commentResponseHappy] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[emotionMeterQuestion] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[messageHappy1] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[messageMeh2] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[messageSad3] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[resetGame] = [
  "",
  standardTextColor, standardTextSize, xCenter, yCenter];

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