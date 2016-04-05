// Make basic structure of game
// Think about ways to make it more complex - ie high score, added buttons, on/off, sampler option, free style mode, button controls
// Build out from there

var toggleTurn = 0;
var playerTurns = 0;
var computerPattern = [];
var playerPattern = [];
var playInterval;
var i = 0;

//Button Assignments
//Creating one function for each button - will reduce this once the game is working

document.getElementById('b1').addEventListener("click", function(event) {
  event.preventDefault();
  console.log(toggleTurn);
  if(toggleTurn === 0) {
    cymbalSound();
    computerPattern.push('b1');
  } else {
    cymbalSound();
    playerPattern.push('b1');
    comparePattern();
  }
});

document.getElementById('b2').addEventListener("click", function(event) {
  event.preventDefault();
  console.log(toggleTurn);
  if(toggleTurn === 0) {
    highHatSound();
    computerPattern.push('b2');
    } else {
      highHatSound();
      playerPattern.push('b2');
      comparePattern();
    }
});

document.getElementById('b3').addEventListener("click", function(event) {
  event.preventDefault();
  console.log(toggleTurn);
  if(toggleTurn === 0) {
    snareSound();
    computerPattern.push('b3');
    } else {
      snareSound();
      playerPattern.push('b3');
      comparePattern();
    }
});

document.getElementById('b4').addEventListener("click", function(event) {
  event.preventDefault();
  console.log(toggleTurn);
  if(toggleTurn === 0) {
    kickSound();
    computerPattern.push('b4');
    } else {
      kickSound();
      playerPattern.push('b4');
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

  setTimeout(function() {
    $('#'+random).trigger('click');
    toggleTurn = 1;
  }, 1000);
  console.log('random ='+random)
  console.log("computer generates a random number: "+computerPattern);
  console.log('toggleTurn = '+ toggleTurn);

}

//new computer pattern

  function playComputerPattern() {
    console.log("in playComputerPattern, computerPattern = "+ computerPattern);           //  create a loop function

    var j = 0;

    playInterval = setInterval(function() {

      if(j === computerPattern.length) {
        clearInterval(playInterval);
      }

      if (computerPattern[j] === 'b1') {
        cymbalSound();
      } else if(computerPattern[j] == 'b2') {
        highHatSound();
        console.log('this2');

      } else if(computerPattern[j] == 'b3') {
        snareSound();
        console.log('this3');

      } else if (computerPattern[j] == 'b4') {
        kickSound();
        console.log('this4');

      } else {
        console.log("none of these");
        console.log(computerPattern.length);
      }

      j++
    }, 1000);

  //    setTimeout(function () {    //  call a 3s setTimeout when the loop is called

  //     //console.log(computerPattern[i]);

  //     if (computerPattern[i] == 'b1') {
  //       cymbalSound();
  //       console.log('this');

  //     } else if(computerPattern[i] == 'b2') {
  //       highHatSound();
  //       console.log('this2');

  //     } else if(computerPattern[i] == 'b3') {
  //       snareSound();
  //       console.log('this3');

  //     } else if (computerPattern[i] == 'b4') {
  //       kickSound();
  //       console.log('this4');

  //     } else {
  //       console.log("none of these");
  //       console.log(computerPattern.length);
  //     }

  //     i++; //  increment the counter

  //     if (i < computerPattern.length) {            //  if the counter < 10, call the loop function
  //       playComputerPattern();             //  ..  again which will trigger another
  //     }                        //  ..  setTimeout()
  // }, 1000)
}

function computerTurn() {
  // var randomSelection = chooseRandom();
    toggleTurn = 0;
    playComputerPattern();
    chooseRandom();
    // return toggleTurn=1;
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
