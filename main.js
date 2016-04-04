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
    computerPattern.push('b1');
    console.log("computer pattern ="+computerPattern);
    console.log('toggleTurn = '+toggleTurn);
    } else {
      playPadCymbal()
      playerPattern.push('b1');
      console.log("player plays back number = "+playerPattern);
      console.log('toggleTurn = '+toggleTurn);
      comparePattern();
    }
});

document.getElementById('b2').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {

    computerPattern.push('b2');
    console.log("computer pattern ="+computerPattern);
    console.log('toggleTurn = '+toggleTurn);
    } else {
      playPadHighHat();
      playerPattern.push('b2');
      console.log("player plays back number = "+playerPattern);
      console.log('toggleTurn = '+toggleTurn);
      comparePattern();
    }
});

document.getElementById('b3').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {

    computerPattern.push('b3');
    console.log("computer pattern ="+computerPattern);
    console.log('toggleTurn = '+toggleTurn);
    } else {
      playPadSnare();
      playerPattern.push('b3');
      console.log("player plays back number = "+playerPattern);
      console.log('toggleTurn = '+toggleTurn);
      comparePattern();
    }
});

document.getElementById('b4').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {

    computerPattern.push('b4');
    console.log("computer pattern ="+computerPattern);
    console.log('toggleTurn = '+toggleTurn);
    } else {
      playPadKick();
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

  for( var i = 0; i < computerPattern.length; i++){

    if (computerPattern[i] === 'b1') {
      setTimeout(playPadCymbal(), 1000);

    } else if(computerPattern[i] === 'b2') {
      setTimeout(playPadHighHat(), 1000);

    }else if(computerPattern[i] === 'b3') {
      setTimeout(playPadSnare(), 1000);

    }else if (computerPattern[i] === 'b4') {
      setTimeout(playPadKick(),1000);
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
  function playPadKick() {
    var audioButton = new Audio();
    audioButton.src = 'sounds/kick.mp3';
    audioButton.play();
  }

  function playPadSnare() {
    var audioButton = new Audio();
    audioButton.src = 'sounds/snare.mp3';
    audioButton.play();
  }

  function playPadHighHat() {
    var audioButton = new Audio();
    audioButton.src = 'sounds/high-hat.mp3';
    audioButton.play();
  }

  function playPadCymbal() {
    var audioButton = new Audio();
    audioButton.src = 'sounds/cymbal.mp3';
    audioButton.play();
  }

computerTurn();
