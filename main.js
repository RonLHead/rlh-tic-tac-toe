var player1 = new Player(true, "X", 0);
var player2 = new Player(false, "O", 0);
var game = new Game(player1, player2);
var p1Wins = [];
var p2Wins = [];
var areBoxesFilled = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("pl1Score");
var p2Score = document.getElementById("p2Score");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box9");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box0");
var boxes = document.querySelectorAll(".game-square");

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", addToken);
}
whoseTurn.addEventListener("click", clearGameGrid);

function addToken(e) {
  var location = e.target;

  if (location.innerText === "" || location.innerText === "") {
    if (game.player1Turn) {
      location.innerHTML += `
    <article class="game-square player-one-token"
    id="${location.id}">
    ${player1.token}</article>`;
      whichPlayersTurn();
    } else {
      location.innerHTML += `
    <article class="game-square player-two-token"
    id="${location.id}">
    ${player2.token}</article>`;
      whichPlayersTurn();
    }
  }
  tieGame();
}

function whichPlayersTurn() {
  game.nextPlayer(player1, player2);
  if(player2.id) {
    whoseTurn.innerText = "It's Player Two's Turn!"
  } else {
    resetToPlayerOne();
  }
}

function clearGameGrid() {
  for(var i=0; i < boxes.length; i++) {
    boxes[i].innerText = "";
  }
}

function resetToPlayerOne() {
  whoseTurn.innerText = "It's Player One's Turn!";
}

function tieGame() {
  var allFilled = 0;
  for(var i = 0; i < boxes.length; i++) {
    if(boxes[i].innerText) {
      allFilled += 1;
    }
  }

  if(allFilled === 9) {
    // whoseTurn.innerText = "It's a Tie!"
    whoseTurn.innerHTML = `
    `
    // clearGameGrid();
    // resetToPlayerOne()
  }
  //check if game is tied
}

function threeInARow() {

}
