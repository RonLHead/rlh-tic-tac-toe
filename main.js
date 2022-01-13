var p1Wins = [];
var p2Wins = [];

//query selectors go here
var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("pl1Score");
var p2Score = document.getElementById("p2Score");
var box1 = document.getElementById("box1");
var boxes = document.querySelectorAll(".game-square");

//event listeners go here
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleClick);
}

var player1 = new Player("p1", "X", 0);
var player2 = new Player("p2", "O", 0);

var game = new Game(player1, player2);

function handleClick(e) {
  var location = e.target;

  if (location.innerText === "X" || location.innerText === "O") {
    return;
  }

  if (game.player1Turn) {
    location.innerHTML += `
    <article class="game-square player-one-token"
    id="${location.id}">
    ${player1.token}</article>`;
    whoseTurn.innerText = "It's Player Two's Turn!";
    game.player1Turn = false;
    game.player2Turn = true;
  } else if (game.player2Turn) {
    location.innerHTML += `
    <article class="game-square player-two-token"
    id="${location.id}">
    ${player2.token}</article>`;
    whoseTurn.innerText = "It's Player One's Turn!";
    game.player2Turn = false;
    game.player1Turn = true;
  }
}
