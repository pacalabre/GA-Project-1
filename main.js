// Make basic structure of game
// Think about ways to make it more complex - ie high score, added buttons, on/off, sampler option, free style mode, button controls
// Build out from there

var toggleTurn = 0;
var playerTurns = 0;
var computerPattern = [];
var playerPattern = [];
var buttons= ['b1','b2','b3','b4'];
var playInterval;

//Assign Click Events to Pads
function assignButtons() {

  $('.pads').click(function(event) {
    event.preventDefault();
    var padId = $(this).attr('id');

    if(toggleTurn === 0) {
      computerPattern.push(padId);
    } else {
      if (padId === 'b1') {
        cymbalSound();
        $('.display').text('01 Cymbal');
        playerPattern.push('b1');
        comparePattern();

      } else if ( padId === 'b2') {
        highHatSound();
        $('.display').text('02 High-hat');
        playerPattern.push('b2');
        comparePattern();

      } else if (padId === 'b3') {
        snareSound();
        $('.display').text('03 Snare');
        playerPattern.push('b3');
        comparePattern();

      } else if (padId === 'b4') {
        kickSound();
        $('.display').text('04 Kick');
        playerPattern.push('b4');
        comparePattern();

      } else {
        console.log("something went wrong in your assignment functions");
      }
    }
  });
}

//Other Buttons

// document.getElementById('playBack').addEventListener('click', function(event){
//   event.preventDefault();
//   playBack();
// });

// //Functions

// function playBack() {
//   console.log(computerPattern);
// }

//Computer Selects a Random Pad
function chooseRandom() {
  var buttons = ['b1','b2','b3','b4'];
  var random = buttons[Math.floor(Math.random()*buttons.length)];

  setTimeout(function() {
    $('#'+random).trigger('click');
    toggleTurn = 1;
  }, 1000);
}

// Computer Plays All Pads in the Computer Pattern Array
function playComputerPattern() {
  var j = 0;
  playInterval = setInterval(function() {

    if(j === computerPattern.length) {
      clearInterval(playInterval);
    }
    if (computerPattern[j] === 'b1') {
      cymbalSound();
      $('.display').text('01 Cymbal');
    } else if(computerPattern[j] == 'b2') {
      highHatSound();
      $('.display').text('02 High Hat');
    } else if(computerPattern[j] == 'b3') {
      snareSound();
      $('.display').text('03 Snare');
    } else if (computerPattern[j] == 'b4') {
      kickSound();
      $('.display').text('04 Kick');
    } else {
      console.log("none of these");
    }

    j++
  }, 1000);
}

function computerTurn() {
    toggleTurn = 0;
    chooseRandom();
    playComputerPattern();
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
    playerTurns++;
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

assignButtons();
computerTurn();
