// Make basic structure of game
// Think about ways to make it more complex - ie high score, added buttons, on/off, sampler option, free style mode, button controls
// Build out from there


var buttonPattern = [];

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





