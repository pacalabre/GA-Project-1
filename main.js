// Make basic structure of game
// Think about ways to make it more complex - ie high score, added buttons, on/off, sampler option, free style mode, button controls
// Build out from there


var buttonPattern = [];
var buttons = ['b1','b2','b3','b4','b5','b6','b7','b8','b9'];

//Creating one function for each button - will reduce this one the game is working
document.getElementById('b1').addEventListener("click", function(event) {
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b1');
  console.log(buttonPattern);
});

document.getElementById('b2').addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b2');
  console.log(buttonPattern);
});

document.getElementById('b3').addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b3');
  console.log(buttonPattern);
});

document.getElementById('b4').addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b4');
  console.log(buttonPattern);
});

document.getElementById('b5').addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b5');
  console.log(buttonPattern);
});

document.getElementById('b6').addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b6');
  console.log(buttonPattern);
});

document.getElementById('b7').addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b7');
  console.log(buttonPattern);
});

document.getElementById('b8').addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b8');
  console.log(buttonPattern);
});

document.getElementById('b9').addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked");
  buttonPattern.push('b9');
  console.log(buttonPattern);
});

//Playback and clear button

document.getElementById('playBack').addEventListener('click', function(event){
  event.preventDefault();
  playBack();
});

function playBack() {
  console.log(buttonPattern);
}

document.getElementById('clear').addEventListener('click', function(event){
  event.preventDefault();
  buttonPattern = [];
  console.log(buttonPattern);
})

function computerTurn() {
  var random = buttons[Math.floor(Math.random()*buttons.length)];
  console.log(random);
}

computerTurn();

