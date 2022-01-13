var player1 = new Player(true, "X", 0);
var player2 = new Player(false, "O", 0);
var game = new Game(player1, player2);
var p1Wins = [];
var p2Wins = [];
var areBoxesFilled = [var 

]

var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("pl1Score");
var p2Score = document.getElementById("p2Score");
var box1 = document.getElementById("box1");
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
    id="${location.id} filled">
    ${player1.token}</article>`;
      whichPlayersTurn();
    } else {
      location.innerHTML += `
    <article class="game-square player-two-token"
    id="${location.id} filled">
    ${player2.token}</article>`;
      whichPlayersTurn();
    }
  }
}

function whichPlayersTurn() {
  game.nextPlayer(player1, player2);
  if(player2.id) {
    whoseTurn.innerText = "It's Player Two's Turn!";
  } else {
    whoseTurn.innerText = "It's Player One's Turn!"
  }
}

function clearGameGrid() {
  for(var i=0; i < boxes.length; i++) {
    boxes[i].innerText = "";
  }
}

function tieGame() {
  //check if game is tied
}

function threeInARow() {

}
