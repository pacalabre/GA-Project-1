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
    } else {
      playerPattern.push('b1');
      comparePattern();
      console.log("playerPattern ="+playerPattern);
    }
});

document.getElementById('b2').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b2');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b2');
      comparePattern();
      console.log("playerPattern ="+playerPattern);
    }
});

document.getElementById('b3').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b3');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b3');
      comparePattern();
      console.log("playerPattern ="+playerPattern);
    }
});

document.getElementById('b4').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b4');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b4');
      comparePattern();
      console.log("playerPattern ="+playerPattern);
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
  computerPattern.push(random);
  console.log(computerPattern);
}

function computerTurn() {
  for (var i = 0; i < 1; i++) {
      chooseRandom();
    }
    toggleTurn=1;
}

function comparePattern() {
  var computerPatternCompare;
  var playerPatternCompare;
  for(var i=0;i<computerPattern.length; i++) {
    computerPatternCompare = computerPattern[i];
    playerPatternCompare = playerPattern[i];
    if (computerPattern.length > playerPattern.length) {
      console.log("player keeps playing");
    } else if (playerPatternCompare === computerPatternCompare) {
      console.log("msg1: player pattern ="+playerPattern);
      playerTurns++;
      toggleTurn = 0;
      playerPattern = [];
      computerTurn();
    } else {
      alert('game over. your score is '+ playerTurns);
    }
  return;
  }
}


computerTurn();
