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

let xEnterKeyStandardPosition = 1732;
let yEnterKeyStandardPosition = 917;

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

assets[enterKey] = ['assets/enterKey.png', xEnterKeyStandardPosition, yEnterKeyStandardPosition];
assets[selfie] = ['assets/selfie.png', 0, 0];
assets[keys] = ['assets/keys.png', 0, 0];
assets[arrowKey] = ['assets/arrowKey.png', 1391, 130];
assets[chooseCaptionBrandish] = ['assets/chooseCaptionBrandish.png', 0, 0];
assets[chooseCaptionHeartfelt] = ['assets/chooseCaptionHeartfelt.png', 0, 0];
assets[captionBrandish] = ['assets/captionBrandish.png', 0, 0];
assets[captionHeartfelt] = ['assets/captionHeartfelt.png', 0, 0];
assets[notifications] = ['assets/notifications.png', 0, 0];
assets[noNotifications] = ['assets/noNotifications.png', 0, 0];
assets[chooseIGStoryBrandish] = ['assets/chooseIGStoryBrandish.png', 0, 0];
assets[chooseIGStoryHeartfelt] = ['assets/chooseIGStoryHeartfelt.png', 0, 0];
assets[yKey] = ['assets/yKey.png', 892, 676];
assets[nKey] = ['assets/nKey.png', 1460, 676];
assets[deletePostOption] = ['assets/deletePostOption.png', 0, 0];
assets[brandishIGStory] = ['assets/brandishIGStory.png', 0, 0];
assets[heartfeltIGStory] = ['assets/heartfeltIGStory.png', 0, 0];
assets[sadComment] = ['assets/sadComment.png', 0, 0];
assets[happyComment] = ['assets/happyComment.png', 0, 0];
assets[happyText] = ['assets/happyText.png', 0, 0];
assets[happyCommentTwo] = ['assets/happyCommentTwo.png', 0, 0];
assets[emotionMeter] = ['assets/emotionMeter.png', 0, 0];
assets[emotionMeterMeh] = ['assets/emotionMeterMeh.png', 0, 0];
assets[emotionMeterHappy] = ['assets/emotionMeterHappy.png', 0, 0];
assets[emotionMeterExcited] = ['assets/emotionMeterExcited.png', 0, 0];
assets[emotionMeterSad] = ['assets/emotionMeterSad.png', 0, 0];
assets[emotionMeterAnxious] = ['assets/emotionMeterAnxious.png', 0, 0];
assets[messageBackground] = ['assets/messageBackground.png', 0, 0];

// Textcopies

let standardTextSize = 24;
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
  "You have some exciting news to share to everyone and now is the perfect time to do it…",
  standardTextColor, standardTextSize, 412, 117];
textboxes[narrativeIntro] = [
  "Congratulations! You finally got that one car you’ve been wanting pretty much your whole life.  It’s not brand new but you’ve worked so hard to get it…You should be proud! What if you put it on your Instagram? ",
  standardTextColor, standardTextSize, 972, 363];
textboxes[chooseCaptionPost] = [
  "Choose a photo and a caption for your post!",
  standardTextColor, standardTextSize, 412, 163];
  textboxes[greatChoice] = [
  "Great choice! That caption is perfect.",
  standardTextColor, standardTextSize, 857, 511];
textboxes[notifications] = [
  "You seem to be getting so much attention. It’s only been seconds! How about you post another story?",
  standardTextColor, standardTextSize, 857, 440];
textboxes[tooCheesy] = [
  "It’s been a few days since you posted and it seems like no one is liking it. Maybe it’s a bit too cheesy?",
  standardTextColor, standardTextSize, 857, 440];
textboxes[chooseCaptionStory] = [
  "How do you want to caption it?",
  standardTextColor, standardTextSize, 621, 118];
textboxes[deletePostQuestion] = [
  "Do you want to delete your post?",
  standardTextColor, standardTextSize, 892, 511];
textboxes[deletePostAnswers] = [
  "Yes pls                                           Nah",
  standardTextColor, standardTextSize, 892, 588];
textboxes[finallyDreamCar] = [
  "Finally…it’s about time your friends and family know about your dream car!",
  standardTextColor, standardTextSize, xCenter, yCenter];
textboxes[finallyHardWork] = [
  "Finally…this car means a lot to you. Be proud of your hard work!",
  standardTextColor, standardTextSize, 857, 481];
textboxes[storyResponseSad] = [
  "A good friend of yours replied to your story!",
  standardTextColor, standardTextSize, 778, 511];
textboxes[storyResponseHappy] = [
  "A good friend of yours replied to your story!",
  standardTextColor, standardTextSize, 778, 511];
textboxes[cringe] = [
  "Thank God…that was cringe anyway, right?",
  standardTextColor, standardTextSize, 854, 481];
textboxes[keepPost] = [
  "Hmm…Yeah. Maybe just keep it posted. It doesn’t matter what people think. Does it?",
  standardTextColor, standardTextSize, 854, 452];
textboxes[textResponseHappy] = [
  "A good friend of yours sent you a text!",
  standardTextColor, standardTextSize, 778, 511];
textboxes[commentResponseHappy] = [
  "A good friend of yours commented on your photo!",
  standardTextColor, standardTextSize, 778, 481];
textboxes[emotionMeterQuestion] = [
  "How do you feel now that you’ve shown your car to the world?",
  standardTextColor, standardTextSize, 298, 237];
textboxes[messageHappy1] = [
  "That’s great! Always remember that you have the power to show the true you, even on social media. Stay genuine and continue to inspire others!",
  standardTextColor, 60, 463, 358];
textboxes[messageMeh2] = [
  "I’m sorry to hear that. Maybe this is a good reminder to reflect on how you want to be perceived through what you post online. If you stay true to yourself, maybe you’ll feel better next time!",
  standardTextColor, 60, 463, 358];
textboxes[messageSad3] = [
  "Sometimes, we need to just get off social media every once in a while. Life is more than just Instagram likes and online attention. At the end of the day you are doing things for YOU!",
  standardTextColor, 60, 463, 358];
textboxes[resetGame] = [
  "Click anywhere to play again!",
  standardTextColor, 70, 960, 448];

/// p5.js /////////////////////////////////////////////////////

// Load all images into an array of arrays
function preload() {
  for (varr i = 0; i < assets.length; i++) {
    loadImage(assets[i][file]);
  }
}

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(30, 41, 18);
  display(currentScreen);
}

// Displays each state (screen)
display = function() {
  if (currentScreen === ) {
    displayAsset();
    displayTextbox();
  }
  else if( currentScreen === ) {

  }
}

function keyPressed() {

}

function keyReleased() {

}

function mousePressed() {

}

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