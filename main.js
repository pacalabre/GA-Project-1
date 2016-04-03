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
      playerTurn();
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
      playerTurn();
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
      playerTurn();
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
      playerTurn();
      console.log("playerPattern ="+playerPattern);
    }
});

document.getElementById('b5').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b5');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b5');
      playerTurn();
      console.log("playerPattern ="+playerPattern);
    }
});

document.getElementById('b6').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b6');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b6');
      playerTurn();
      console.log("playerPattern ="+playerPattern);
    }
});

document.getElementById('b7').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b7');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b7');
      playerTurn();
      console.log("playerPattern ="+playerPattern);
    }
});

document.getElementById('b8').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b8');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b8');
      playerTurn();
      console.log("playerPattern ="+playerPattern);
    }
});

document.getElementById('b9').addEventListener("click", function(event) {
  event.preventDefault();
  if(toggleTurn === 0) {
    computerPattern.push('b9');
    console.log("computer pattern ="+computerPattern);
    } else {
      playerPattern.push('b9');
      playerTurn();
      console.log("playerPattern ="+playerPattern);
    }
});

//Other Buttons

document.getElementById('playBack').addEventListener('click', function(event){
  event.preventDefault();
  playBack();
});

document.getElementById('clear').addEventListener('click', function(event){
  event.preventDefault();
  buttonPattern = [];
  console.log(buttonPattern);
})

//Functions

function playBack() {
  console.log(computerPattern);
}

function chooseRandom() {
  var buttons = ['b1','b2','b3','b4','b5','b6','b7','b8','b9'];
  var random = buttons[Math.floor(Math.random()*buttons.length)];
  computerPattern.push(random);
  console.log(computerPattern);
}

function computerTurn() {
  for (var i = 0; i < 1; i++) {
      chooseRandom();
    }
    toggleTurn=1;
    playerTurn();
}

function comparePattern() {
  console.log('computerPattern = '+ computerPattern);
  console.log('playerPattern = '+ playerPattern);
  var computerPatternCompare;
  var playerPatternCompare;
  for(var i=0;i<computerPattern.length; i++) {
    computerPatternCompare = computerPattern[i];
    playerPatternCompare = playerPattern[i];
  }
  if (computerPattern.length > playerPattern.length) {
    playerTurn();
  } else if (playerPatternCompare === computerPatternCompare) {
    console.log("msg1: player pattern ="+playerPattern + "computerPattern ="+ computerPattern);
    playerTurns++;
    // toggleTurn = 0;
    computerTurn();
  } else {
    console.log("Game Over. Your Score is "+playerTurns);
    //computerTurn();
  }
}

function playerTurn() {
  if (computerPattern.length === playerPattern.length) {
    comparePattern();
  } else {
  toggleTurn = 1;
  }
  console.log('toggleturn =' + toggleTurn);
}

computerTurn();

