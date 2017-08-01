var gameOver = false;
var winningScore = 5;

var playerOne = document.getElementById("p1");
var p1Display = document.getElementById("p1Display")
var p1Tally = 0;
playerOne.addEventListener("click", function(){
  if (!gameOver) {
    p1Tally++;
    if (p1Tally === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Tally;
  }
});

var playerTwo = document.getElementById("p2");
var p2Display = document.getElementById("p2Display")
var p2Tally = 0;
playerTwo.addEventListener("click", function(){
  if (!gameOver) {
  p2Tally++;
    if (p2Tally === winningScore){
      p2Display.classList.add("winner");
      gameOver = true;
    }
  p2Display.textContent = p2Tally;
  }
});

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
  reset();
});

function reset() {
  p1Tally = 0;
  p1Display.textContent = p1Tally;
  p1Display.classList.remove("winner");
  p2Tally = 0;
  p2Display.textContent = p2Tally;
  p2Display.classList.remove("winner");
  gameOver = false;
}

var scoreInput = document.getElementById("scoreInput");
scoreInput.addEventListener("change", function(){
  maxScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
