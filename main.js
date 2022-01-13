var player1 = new Player(true, "X", 0);
var player2 = new Player(false, "O", 0);
var game = new Game(player1, player2);
var p1Wins = [];
var p2Wins = [];

var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("pl1Score");
var p2Score = document.getElementById("p2Score");
var filledbox1 = document.getElementById("box1");
// var box2 = document.getElementById("box2");
// var box3 = document.getElementById("box3");
// var box4 = document.getElementById("box4");
// var box5 = document.getElementById("box5");
// var box6 = document.getElementById("box9");
// var box7 = document.getElementById("box7");
// var box8 = document.getElementById("box8");
// var box9 = document.getElementById("box9");
var boxes = document.querySelectorAll(".game-square");

var box1 = boxes[0].innerText;
var box2 = boxes[1].innerText;
var box3 = boxes[2].innerText;
var box4 = boxes[3].innerText;
var box5 = boxes[4].innerText;
var box6 = boxes[5].innerText;
var box7 = boxes[6].innerText;
var box8 = boxes[7].innerText;
var box9 = boxes[8].innerText;

var areBoxesFilled = [box1, box2, box3]
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", addToken);
}
// whoseTurn.addEventListener("click", clearGameGrid);


function addToken(e) {
  e.preventDefault()
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
  threeInARow()
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
  if(game.draw) {
    for(var i=0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
  }
  resetToPlayerOne();
  game.draw = false;
}

function resetToPlayerOne() {
  whoseTurn.innerText = "It's Player One's Turn!";
  game.player1Turn = true;
}

function tieDisplay() {
  whoseTurn.innerText = "It's a Tie!"
}

function tieGame() {
  var allFilled = 0;
  for(var i = 0; i < boxes.length; i++) {
    if(boxes[i].innerText) {
      allFilled += 1;
    }
  }

  if(allFilled === 9) {
    tieDisplay();
    game.draw = true;
    setTimeout("clearGameGrid()", 3000)
  }
}

function threeInARow() {
  for(var i = 0; i < boxes.length; i++) {
    areBoxesFilled[i] = boxes[i].innerText;
  }
  if(areBoxesFilled[0] === areBoxesFilled[1] === areBoxesFilled[2]) {
    player1.wins += 1;
    whoseTurn.innerText = "Player One Wins!"
    ps1Score.innerText = `${player1.wins}`;
    return true;
  }
}
