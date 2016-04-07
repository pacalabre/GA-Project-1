// Make basic structure of game
// Think about ways to make it more complex:
// high score,
// added buttons,
// on/off,
// sampler option,
// free style mode,
// button controls

// Build out from there

// On/Off - done
// style button text
// add keyboard play - done

var onOff = false;
var buttonsAssigned = false;
var toggleTurn = 0;
var playerTurns = 0;
var computerPattern = [];
var playerPattern = [];
var buttons= ['b1','b2','b3','b4'];
var playInterval;


//Assign Click Events to Pads

function assignButtons() {
  if(onOff === true && buttonsAssigned === false) {
    $('.pads').click(function(event) {
      event.preventDefault();
      var padId = $(this).attr('id');

      if(toggleTurn === 0) {
        computerPattern.push(padId);
      } else {
        if (padId === 'b1') {
          cymbalSound();
          $('.display').text('04 Cymbal');
          playerPattern.push('b1');
          comparePattern();

        } else if ( padId === 'b2') {
          highHatSound();
          $('.display').text('03 High-hat');
          playerPattern.push('b2');
          comparePattern();

        } else if (padId === 'b3') {
          snareSound();
          $('.display').text('02 Snare');
          playerPattern.push('b3');
          comparePattern();

        } else if (padId === 'b4') {
          kickSound();
          $('.display').text('01 Kick');
          playerPattern.push('b4');
          comparePattern();

        } else {
          console.log("something went wrong in your assignment functions");
        }
      }
    });
  } else {
    console.log("its not on");
  }
  return buttonsAssigned = true;
}

//On / Off button
$('#power').click(function(){
  event.preventDefault();
  onOff= !onOff;
  if(onOff === true) {
    $('.display').addClass('display-on');
    assignButtons();
    toggleTurn = 0;
    playerTurns = 0;
    computerPattern = [];
    playerPattern = [];
    computerTurn();
  } else if(onOff === false) {
    $('.display').removeClass('display-on');
  }

  if (onOff === false) {
    $('.display').removeClass('display-on');
    toggleTurn = 0;
    playerTurns = 0;
    computerPattern = [];
    playerPattern = [];
    $('.display').text('');
  }
})


//assign keyboard events

$(document).keypress(function(event) {
  if(onOff === true) {
    if(toggleTurn === 1) {
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == '49') {
        $('#b4').click();
      } else if (keycode == '50') {
        $('#b3').click();
      } else if (keycode == '51') {
        $('#b2').click();
      } else if (keycode == '52'){
        $('#b1').click();
      }
    } else if (toggleTurn != 1) {
      console.log("its not your turn yo!");
    }
  }
});



// New Game Button

document.getElementById('newGame').addEventListener('click', function(event){
  event.preventDefault();
  toggleTurn = 0;
  playerTurns = 0;
  computerPattern = [];
  playerPattern = [];
  computerTurn();
});


//Functions

function playBack() {
  console.log(computerPattern);
}


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
      $('.display').text('04 Cymbal');
    } else if(computerPattern[j] == 'b2') {
      highHatSound();
      $('.display').text('03 High-hat');
    } else if(computerPattern[j] == 'b3') {
      snareSound();
      $('.display').text('02 Snare');
    } else if (computerPattern[j] == 'b4') {
      kickSound();
      $('.display').text('01 Kick');
    } else {
      console.log("none of these");
    }

    j++
  }, 1000);
}

function computerTurn() {
  if (onOff === true){
    toggleTurn = 0;
    chooseRandom();
    playComputerPattern();
  }
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
          return swal("game over, your score is "+ playerTurns);
          // return alert("game over, your score is "+ playerTurns);
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


function Power() {
  if(onOff == 1) {
    assignButtons();
    computerTurn();
  }
}


