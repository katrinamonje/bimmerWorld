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

// Standard Paramaters

// let xCenter = width/2;
// let yCenter = height/2;

let xEnterKeyStandardPosition = 1732;
let yEnterKeyStandardPosition = 917;

let standardTextSize = 24;
let standardTextColor = ('#ffffff');

// Indexes for properties of assets (images)

let file = 0;
let assetX = 1;
let assetY = 2; 

// Indexes for properties of textboxes (textcopies)

let content = 0;
let color = 1;
let size = 2
let textboxX = 3;
let textboxY = 4;

// Indexes for all screens (states)

let excitingNewsScreen = 0;
let narrativeIntroductionScreen = 1;
let chooseCaptionBrandishScreen = 2;
let chooseCaptionHeartfeltScreen = 3;
let captionBrandishScreen = 4;
let captionHeartfeltScreen = 5;
let lotsOfAttentionScreen = 6;
let noAttentionScreen = 7;
let chooseIGStoryBrandishScreen = 8;
let chooseIGStoryHeartfeltScreen = 9;
let deletePostOptionScreen = 10;
let brandishIGStoryScreen = 11;
let heartfeltIGStoryScreen = 12;
let sadCommentScreen = 13;
let happyCommentScreen = 14;
let deletePostOptionYesScreen = 15;
let deletePostOptionNoScreen = 16;
let happyTextScreen = 17;
let happyCommentTwoScreen = 18;
let emotionMeterScreen = 19;
let emotionMeterMehScreen = 20;
let emotionMeterHappyScreen = 21;
let emotionMeterExcitedScreen = 22;
let emotionMeterSadScreen = 23;
let emotionMeterAnxiousScreen = 24;
let messageHappyScreen = 25;
let messageMehScreen = 26;
let messageSadScreen = 27;
let playAgainScreen = 28;

var currentScreen = excitingNewsScreen; // Holds index for currently displayed screen

// Indexes for all assets, in order of appearance

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

// Indexes for all textboxes, in order of appearance

let hook = 0;
let narrativeIntro = 1;
let chooseCaptionPost = 2;
let greatChoice = 3;
let manyNotifications = 4;
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

// 2D Arrays for all assets and textboxes

var assets = [[]];
var textboxes = [[]];

textboxes[hook] = [
  "You have some exciting news to share to everyone and now is the perfect time to do it…",
  standardTextColor, standardTextSize, 412, 117];
textboxes[narrativeIntro] = [
  "Congratulations! You finally got that one car you’ve been wanting\npretty much your whole life.  It’s not brand new but you’ve worked\nso hard to get it…You should be proud!\n\nWhat if you put it on your Instagram? ",
  standardTextColor, standardTextSize, 972, 363];
textboxes[chooseCaptionPost] = [
  "Choose a photo and a caption for your post!",
  standardTextColor, standardTextSize, 412, 163];
  textboxes[greatChoice] = [
  "Great choice! That caption is perfect.",
  standardTextColor, standardTextSize, 857, 511];
textboxes[manyNotifications] = [
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
  standardTextColor, standardTextSize, 857, 481];
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
  assets[enterKey] = [loadImage("assets/enterKey.png"), xEnterKeyStandardPosition, yEnterKeyStandardPosition];
  assets[selfie] = [loadImage("assets/selfie.png"), 0, 0];
  assets[keys] = [loadImage("assets/keys.png"), 0, 0];
  assets[arrowKey] = [loadImage("assets/arrowKey.png"), 1391, 130];
  assets[chooseCaptionBrandish] = [loadImage("assets/chooseCaptionBrandish.png"), 0, 0];
  assets[chooseCaptionHeartfelt] = [loadImage("assets/chooseCaptionHeartfelt.png"), 0, 0];
  assets[captionBrandish] = [loadImage("assets/captionBrandish.png"), 0, 0];
  assets[captionHeartfelt] = [loadImage("assets/captionHeartfelt.png"), 0, 0];
  assets[notifications] = [loadImage("assets/notifications.png"), 0, 0];
  assets[noNotifications] = [loadImage("assets/noNotifications.png"), 0, 0];
  assets[chooseIGStoryBrandish] = [loadImage("assets/chooseIGStoryBrandish.png"), 0, 0];
  assets[chooseIGStoryHeartfelt] = [loadImage("assets/chooseIGStoryHeartfelt.png"), 0, 0];
  assets[yKey] = [loadImage("assets/yKey.png"), 892, 676];
  assets[nKey] = [loadImage("assets/nKey.png"), 1460, 676];
  assets[deletePostOption] = [loadImage("assets/deletePostOption.png"), 0, 0];
  assets[brandishIGStory] = [loadImage("assets/brandishIGStory.png"), 0, 0];
  assets[heartfeltIGStory] = [loadImage("assets/heartfeltIGStory.png"), 0, 0];
  assets[sadComment] = [loadImage("assets/sadComment.png"), 0, 0];
  assets[happyComment] = [loadImage("assets/happyComment.png"), 0, 0];
  assets[happyText] = [loadImage("assets/happyText.png"), 0, 0];
  assets[happyCommentTwo] = [loadImage("assets/happyCommentTwo.png"), 0, 0];
  assets[emotionMeter] = [loadImage("assets/emotionMeter.png"), 0, 0];
  assets[emotionMeterMeh] = [loadImage("assets/emotionMeterMeh.png"), 0, 0];
  assets[emotionMeterHappy] = [loadImage("assets/emotionMeterHappy.png"), 0, 0];
  assets[emotionMeterExcited] = [loadImage("assets/emotionMeterExcited.png"), 0, 0];
  assets[emotionMeterSad] = [loadImage("assets/emotionMeterSad.png"), 0, 0];
  assets[emotionMeterAnxious] = [loadImage("assets/emotionMeterAnxious.png"), 0, 0];
  assets[messageBackground] = [loadImage("assets/messageBackground.png"), 0, 0];
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
  if (currentScreen == excitingNewsScreen) {
    displayAsset(selfie);
    displayTextbox(hook);
    displayAsset(enterKey);
  }
  else if (currentScreen == narrativeIntroductionScreen) {
    displayAsset(keys);
    displayTextbox(narrativeIntro);
    displayAsset(enterKey);
  }
  else if (currentScreen == chooseCaptionBrandishScreen) {
    displayAsset(chooseCaptionBrandish);
    displayTextbox(chooseCaptionPost);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == chooseCaptionHeartfeltScreen) {
    displayAsset(chooseCaptionHeartfelt);
    displayTextbox(chooseCaptionPost);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == captionBrandishScreen) {
    displayAsset(captionBrandish);
    displayTextbox(greatChoice);
    displayAsset(enterKey);
  }
  else if (currentScreen == captionHeartfeltScreen) {
    displayAsset(captionHeartfelt);
    displayTextbox(greatChoice);
    displayAsset(enterKey);
  }
  else if (currentScreen == lotsOfAttentionScreen) {
    displayAsset(notifications);
    displayTextbox(manyNotifications);
    displayAsset(enterKey);
  }
  else if (currentScreen == noAttentionScreen) {
    displayAsset(noNotifications);
    displayTextbox(tooCheesy);
    displayAsset(enterKey);
  }
  else if (currentScreen == chooseIGStoryBrandishScreen) {
    displayAsset(chooseIGStoryBrandish);
    displayTextbox(chooseCaptionStory);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == chooseIGStoryHeartfeltScreen) {
    displayAsset(chooseIGStoryHeartfelt);
    displayTextbox(chooseCaptionStory);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == deletePostOptionScreen) {
    displayAsset(deletePostOption);
    displayTextbox(deletePostQuestion);
    displayTextbox(deletePostAnswers);
    displayAsset(yKey);
    displayAsset(nKey);
  }
  else if (currentScreen == brandishIGStoryScreen) {
    displayAsset(brandishIGStory);
    displayTextbox(finallyDreamCar);
    displayAsset(enterKey);
  }
  else if (currentScreen == heartfeltIGStoryScreen) {
    displayAsset(heartfeltIGStory);
    displayTextbox(finallyHardWork);
    displayAsset(enterKey);
  }
  else if (currentScreen == sadCommentScreen) {
    displayAsset(sadComment);
    displayTextbox(storyResponseSad);
    displayAsset(enterKey);
  }
  else if (currentScreen == happyCommentScreen) {
    displayAsset(happyComment);
    displayTextbox(storyResponseHappy);
    displayAsset(enterKey);
  }
  else if (currentScreen == deletePostOptionYesScreen) {
    displayAsset(deletePostOption);
    displayTextbox(cringe);
    displayAsset(enterKey);
  }
  else if (currentScreen == deletePostOptionNoScreen) {
    displayAsset(deletePostOption);
    displayTextbox(keepPost);
    displayAsset(enterKey);
  }
  else if (currentScreen == happyTextScreen) {
    displayAsset(happyText);
    displayTextbox(textResponseHappy);
    displayAsset(enterKey);
  }
  else if (currentScreen == happyCommentTwoScreen) {
    displayAsset(happyCommentTwo);
    displayTextbox(commentResponseHappy);
    displayAsset(enterKey);
  }
  else if (currentScreen == emotionMeterScreen) {
    displayAsset(emotionMeter);
    displayTextbox(emotionMeterQuestion);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == emotionMeterMehScreen) {
    displayAsset(emotionMeterMeh);
    displayTextbox(emotionMeterQuestion);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == emotionMeterHappyScreen) {
    displayAsset(emotionMeterHappy);
    displayTextbox(emotionMeterQuestion);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == emotionMeterExcitedScreen) {
    displayAsset(emotionMeterExcited);
    displayTextbox(emotionMeterQuestion);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == emotionMeterSadScreen) {
    displayAsset(emotionMeterSad);
    displayTextbox(emotionMeterQuestion);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == emotionMeterAnxiousScreen) {
    displayAsset(emotionMeterAnxious);
    displayTextbox(emotionMeterQuestion);
    displayAsset(enterKey);
    displayAsset(arrowKey);
  }
  else if (currentScreen == messageHappyScreen) {
    displayAsset(messageBackground);
    displayTextbox(messageHappy1);
    displayAsset(enterKey);
  }
  else if (currentScreen == messageMehScreen) {
    displayAsset(messageBackground);
    displayTextbox(messageMeh2);
    displayAsset(enterKey);
  }
  else if (currentScreen == messageSadScreen) {
    displayAsset(messageBackground);
    displayTextbox(messageSad3);
    displayAsset(enterKey);
  }
  else if (currentScreen == playAgainScreen) {
    displayAsset(keys);
    displayTextbox(resetGame);
  }
}

function displayAsset(asset) {
  image(assets[asset][file], assets[asset][assetX], assets[asset][assetY]);
}

function displayTextbox(textbox) {
  textSize(textboxes[textbox][size]);
  fill(textboxes[textbox][color]);
  text(textboxes[textbox][content], textboxes[textbox][textboxX], textboxes[textbox][textboxY]);
}



// Navigation interactions between screens (states)
function keyPressed() {
  // Interaction from anywhere in the program
  if (keyCode === ESCAPE) {
    currentScreen = excitingNewsScreen;
  }

  // Interactions for each screen (state)
  if (currentScreen === excitingNewsScreen) {                   // state 0
    if (keyCode === ENTER) {
      currentScreen = narrativeIntroductionScreen;
    }
  }
  else if (currentScreen === narrativeIntroductionScreen) {     // state 1
    if (keyCode === ENTER) {
      currentScreen = chooseCaptionBrandishScreen;
    }
  }
  else if (currentScreen === chooseCaptionBrandishScreen) {    // state 2
    if (keyCode === LEFT_ARROW) {
      currentScreen = chooseCaptionHeartfeltScreen;
    }
    else if (keyCode === RIGHT_ARROW) {
      currentScreen = chooseCaptionBrandishScreen;
    }
    else if (keyCode === ENTER) {
      currentScreen = captionBrandishScreen;
    }
  }
  else if (currentScreen === chooseCaptionHeartfeltScreen) {   // state 3
    if (keyCode === LEFT_ARROW) {
      currentScreen = chooseCaptionHeartfeltScreen;
    }
    else if (keyCode === RIGHT_ARROW) {
      currentScreen = chooseCaptionBrandishScreen;
    }
    else if (keyCode === ENTER) {
      currentScreen = captionHeartfeltScreen;
    }
  }
  else if (currentScreen === captionBrandishScreen) {         // state 4
    if (keyCode === ENTER) {
      currentScreen = lotsOfAttentionScreen;
    }
  }
  else if (currentScreen === captionHeartfeltScreen) {        // state 5
    if (keyCode === ENTER) {
      currentScreen = noAttentionScreen;
    }
  }
  else if (currentScreen === lotsOfAttentionScreen) {         // state 6
    if (keyCode === ENTER) {
      currentScreen = chooseIGStoryBrandishScreen;
    }
  }
  else if (currentScreen === noAttentionScreen) {             // state 7
    if (keyCode === ENTER) {
      currentScreen = deletePostOptionScreen;
    }
  }
  else if (currentScreen === chooseIGStoryBrandishScreen) {   // state 8
    if (keyCode === LEFT_ARROW) {
      currentScreen = chooseIGStoryBrandishScreen;
    }
    else if (keyCode === RIGHT_ARROW) {
      currentScreen = chooseIGStoryHeartfeltScreen;
    }
    else if (keyCode === ENTER) {
      currentScreen = brandishIGStoryScreen;
    }
  }
else if (currentScreen === chooseIGStoryHeartfeltScreen) {     // state 9
    if (keyCode === LEFT_ARROW) {
      currentScreen = chooseIGStoryBrandishScreen;
    }
    else if (keyCode === RIGHT_ARROW) {
      currentScreen = chooseIGStoryHeartfeltScreen;
    }
    else if (keyCode === ENTER) {
      currentScreen = heartfeltIGStoryScreen;
    }
  }
else if (currentScreen === brandishIGStoryScreen) {     // state 11
    if (keyCode === ENTER) {
      currentScreen = sadCommentScreen;
    }
  }
else if (currentScreen === heartfeltIGStoryScreen) {     // state 12
    if (keyCode === ENTER) {
      currentScreen = happyCommentScreen;
    }
  }
else if (currentScreen === sadCommentScreen) {     // state 13
    if (keyCode === ENTER) {
      currentScreen = emotionMeterScreen;
    }
  }


}

function keyTyped() {
  //Interaction for state 10
  if (currentScreen === deletePostOptionScreen) {     // state 10
    if (key === 'y') {
      currentScreen = deletePostOptionYesScreen;
    }
    else if (key === 'n') {
      currentScreen = deletePostOptionNoScreen;
    }
  }
}
