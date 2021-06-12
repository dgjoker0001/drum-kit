// Detecting Button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}
function clicked() {
  var buttonPressed = this.innerHTML;
  makeSound(buttonPressed);
  buttonAnimation(buttonPressed);
}



// to capture keyboard key pressed
document.addEventListener("keydown", keypressed);
function keypressed(){
  var keyDown = event.key;
  makeSound(keyDown);
  buttonAnimation(keyDown);
}


// function for key or button pressed
function makeSound (key){
  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
  }
}

// adding animation to the button buttonPressed
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  // removing the animation after certain time
  setTimeout(remove, 100);
  function remove(){
    activeButton.classList.remove("pressed");
  }
}
