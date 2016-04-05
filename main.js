// Make basic structure of game
// Think about ways to make it more complex - ie high score, added buttons, on/off, sampler option, free style mode, button controls
// Build out from there

var toggleTurn = 0;
var playerTurns = 0;
var computerPattern = [];
var playerPattern = [];

//Button Assignments
//Creating one function for each button - will reduce this once the game is working

document.getElementById('b1').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    setTimeout(cymbalSound(),2000);
    computerPattern.push('b1');
    console.log("computer pattern ="+computerPattern);
    console.log('toggleTurn = '+toggleTurn);
    } else {
      cymbalSound();
      playerPattern.push('b1');
      console.log("player plays back number = "+playerPattern);
      console.log('toggleTurn = '+toggleTurn);
      comparePattern();
    }
});

document.getElementById('b2').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    setTimeout(highHatSound(),2000);
    computerPattern.push('b2');
    console.log("computer pattern ="+computerPattern);
    console.log('toggleTurn = '+toggleTurn);
    } else {
      highHatSound();
      playerPattern.push('b2');
      console.log("player plays back number = "+playerPattern);
      console.log('toggleTurn = '+toggleTurn);
      comparePattern();
    }
});

document.getElementById('b3').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    setTimeout(snareSound(),2000);
    computerPattern.push('b3');
    console.log("computer pattern ="+computerPattern);
    console.log('toggleTurn = '+toggleTurn);
    } else {
      snareSound();
      playerPattern.push('b3');
      console.log("player plays back number = "+playerPattern);
      console.log('toggleTurn = '+toggleTurn);
      comparePattern();
    }
});

document.getElementById('b4').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    setTimeout(kickSound(),2000);
    computerPattern.push('b4');
    console.log("computer pattern ="+computerPattern);
    console.log('toggleTurn = '+toggleTurn);
    } else {
      kickSound();
      playerPattern.push('b4');
      console.log("player plays back number = "+playerPattern);
      console.log('toggleTurn = '+toggleTurn);
      comparePattern();
    }
});

//Other Buttons

document.getElementById('playBack').addEventListener('click', function(event){
  event.preventDefault();
  playBack();
});

//Functions

function playBack() {
  console.log(computerPattern);
}

function chooseRandom() {
  var buttons = ['b1','b2','b3','b4'];
  var random = buttons[Math.floor(Math.random()*buttons.length)];
  //this trigger event is the only jquery in the code
  //replace with vanilla JS event when working
  $('#'+random).trigger('click');
  console.log('random ='+random)
  console.log("computer generates a random number: "+computerPattern);
  console.log('toggleTurn = '+ toggleTurn);
}

function playComputerPattern() {
  //Set interval one second apart from each other
  //play back each button in var computerPattern
  console.log(computerPattern);

  //* This needs to be slowed down *//
  for( var i = 0; i < computerPattern.length; i++){

    if (computerPattern[i] === 'b1') {
      cymbalSound;
      console.log('this');

    } else if(computerPattern[i] === 'b2') {
      highHatSound;
      console.log('this2');

    }else if(computerPattern[i] === 'b3') {
      snareSound;
      console.log('this3');

    }else if (computerPattern[i] === 'b4') {
      kickSound;
      console.log('this4');

    }
  }
}

function computerTurn() {
    toggleTurn = 0;
    playComputerPattern();
    chooseRandom();
    return toggleTurn=1;
}

function comparePattern() {
  var computerPatternCompare;
  var playerPatternCompare;
  if (computerPattern.length > playerPattern.length) {
      console.log("player keeps playing");
    }
  if (computerPattern.length === playerPattern.length) {
    for(var i = 0; i < computerPattern.length; i++) {
      computerPatternCompare = computerPattern[i];
      playerPatternCompare = playerPattern[i];
        if (computerPatternCompare != playerPatternCompare) {
          return alert("game over, your score is "+ playerTurns);
        }
    }
    console.log("the numbers matched up "+"player number = "+computerPatternCompare+ "computer number = "+playerPatternCompare);
    playerTurns++;
    console.log(playerTurns);
    toggleTurn = 1;
    playerPattern = [];
    computerTurn();
  }
}

//Drum Sounds
  var kickSound = function playPadKick() {
    var audioButton = new Audio();
    audioButton.src = 'sounds/kick.mp3';
    audioButton.play();
  }

  var snareSound = function playPadSnare() {
    var audioButton = new Audio();
    audioButton.src = 'sounds/snare.mp3';
    audioButton.play();
  }

  var highHatSound = function playPadHighHat() {
    var audioButton = new Audio();
    audioButton.src = 'sounds/high-hat.mp3';
    audioButton.play();
  }

  var cymbalSound = function playPadCymbal() {
    var audioButton = new Audio();
    audioButton.src = 'sounds/cymbal.mp3';
    audioButton.play();
  }

computerTurn();
