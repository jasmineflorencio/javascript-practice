var squareNumber = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setModeButtons();
  setSquares();
  reset();
}

function setModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? squareNumber = 3 : squareNumber = 6;
      reset();
    });
  }
}

function setSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset() {
  colors = generateColors(squareNumber);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  };
  h1.style.backgroundColor = "rgb(132, 126, 218)";
}

resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num) {
  var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(randomColor());
    }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 255 + 1);
  var g = Math.floor(Math.random() * 255 + 1);
  var b = Math.floor(Math.random() * 255 + 1);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
