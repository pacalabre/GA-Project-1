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
      console.log("player plays back number = "+playerPattern);
      comparePattern();
    }
});

document.getElementById('b2').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b2');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b2');
      console.log("player plays back number = "+playerPattern);
      comparePattern();
    }
});

document.getElementById('b3').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b3');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b3');
      console.log("player plays back number = "+playerPattern);
      comparePattern();
    }
});

document.getElementById('b4').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b4');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b4');
      console.log("player plays back number = "+playerPattern);
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
  computerPattern.push(random);
  console.log("computer generates a random number: "+computerPattern);
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
    console.log("playerPatternCompare = "+playerPatternCompare);
    console.log("computerPatternCompare = "+computerPatternCompare)
    if (computerPattern.length > playerPattern.length) {
      console.log("player keeps playing");
    } else if (playerPatternCompare === computerPatternCompare) {
      console.log("the numbers matched up "+"player number = "+playerPatternCompare+ "computer number = "+computerPatternCompare);
      playerTurns++;
      toggleTurn = 0;
      playerPattern = [];
      computerTurn();
    } else {
      alert("game over, your score is "+ playerTurns);
      return;
    }
  }
}


computerTurn();
