var player1 = new Player(true, "X", []);
var player2 = new Player(false, "O", []);
var game = new Game(player1, player2);
var p1Wins = [];
var p2Wins = [];

var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var boxes = document.querySelectorAll(".game-square");
var gameBoard = document.querySelector(".game-grid")

var box1 = boxes[0].innerText;
var box2 = boxes[1].innerText;
var box3 = boxes[2].innerText;
var box4 = boxes[3].innerText;
var box5 = boxes[4].innerText;
var box6 = boxes[5].innerText;
var box7 = boxes[6].innerText;
var box8 = boxes[7].innerText;
var box9 = boxes[8].innerText;

var areBoxesFilled = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", addToken);
  // var stopClick = boxes[i].addEventListener("click", preventClick);
}

// gameBoard.addEventListener("click", freezeClick)
// whoseTurn.addEventListener("click", clearGameGrid);

function addToken(e) {
  // e.preventDefault()
  var location = e.target;

  if (location.innerText === "") {
    if (game.player1Turn) {
      location.innerHTML += `
    <article class="game-square player-one-token"
    id="${location.id}">
    ${player1.token}</article>`;
    game.nextPlayer(player1, player2);
      whichPlayersTurn();
    } else {
      location.innerHTML += `
    <article class="game-square player-two-token"
    id="${location.id}">
    ${player2.token}</article>`;
    game.nextPlayer(player1, player2);

      whichPlayersTurn();
    }
  }
  threeInARow();
  tieGame();
}

function whichPlayersTurn() {
    if (player2.id) {
      whoseTurn.innerText = "It's Player Two's Turn!";
    } else {
      whoseTurn.innerText = "It's Player One's Turn!";
      game.player1Turn = true;
    }
}

function clearGameGrid() {
  for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerText = "";
    }
}


function tieGame() {
  var allFilled = 0;
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].innerText) {
      allFilled += 1;
    }
  }

  if (allFilled === 9 && !game.winner) {
    game.draw = true;
whoseTurn.innerText = "It's a Tie! Play Again.";
    clearGameGrid();
    setTimeout("whichPlayersTurn()", 2000);
    // freezeClick(event)
}}

function threeInARow() {
  for (var i = 0; i < boxes.length; i++) {
    areBoxesFilled[i] = boxes[i].innerText;
  }

  if (game.winConditions(areBoxesFilled) === 1) {
    if (areBoxesFilled[0] === player1.token) {
      player1.wins.push(player1.token);
      game.player1Score = player1.wins.length;
      game.winner = player1.id;
      whoseTurn.innerText = "Player One Wins!";
      p1Score.innerText = `Score: ${game.player1Score}`;
      clearGameGrid();
      setTimeout("whichPlayersTurn()", 3000)
    } else if (areBoxesFilled[0] === player2.token) {
      player2.wins.push(player2.token);
      game.player2Score = player2.wins.length;
      game.winner = player2.id;
      whoseTurn.innerText = "Player Two Wins!";
      p2Score.innerText = `Score: ${game.player2Score}`;
      clearGameGrid();
      setTimeout("whichPlayersTurn()", 3000)
    }
  } else if (game.winConditions(areBoxesFilled) === 2)
  {
    if (areBoxesFilled[3] === player1.token) {
      player1.wins.push(player1.token);
      game.player1Score = player1.wins.length;
      game.winner = player1.id;
      whoseTurn.innerText = "Player One Wins!";
      p1Score.innerText = `Score: ${game.player1Score}`;
      setTimeout("clearGameGrid()", 3000);
    } else if (areBoxesFilled[3] === player2.token) {
      player2.wins.push(player2.token);
      game.player2Score = player2.wins.length;
      game.winner = player2.id;
      whoseTurn.innerText = "Player Two Wins!";
      p2Score.innerText = `Score: ${game.player2Score}`;
      setTimeout("clearGameGrid()", 3000);
    }
  } else if (game.winConditions(areBoxesFilled) === 3) {
    if (areBoxesFilled[6] === player1.token) {
      player1.wins.push(player1.token);
      game.player1Score = player1.wins.length;
      game.winner = player1.id;
      whoseTurn.innerText = "Player One Wins!";
      p1Score.innerText = `Score: ${game.player1Score}`;
      setTimeout("clearGameGrid()", 3000);
    } else if (areBoxesFilled[6] === player2.token) {
      player2.wins.push(player2.token);
      game.player2Score = player2.wins.length;
      game.winner = player2.id;
      whoseTurn.innerText = "Player Two Wins!";
      p2Score.innerText = `Score: ${game.player2Score}`;
      setTimeout("clearGameGrid()", 3000);
    }
  } else if (

  ) {
    if (areBoxesFilled[0] === player1.token) {
      player1.wins.push(player1.token);
      game.player1Score = player1.wins.length;
      game.winner = player1.id;
      whoseTurn.innerText = "Player One Wins!";
      p1Score.innerText = `Score: ${game.player1Score}`;
      setTimeout("clearGameGrid()", 3000);
    } else if (areBoxesFilled[0] === player2.token) {
      player2.wins.push(player2.token);
      game.player2Score = player2.wins.length;
      game.winner = player2.id;
      whoseTurn.innerText = "Player Two Wins!";
      p2Score.innerText = `Score: ${game.player2Score}`;
      setTimeout("clearGameGrid()", 3000);
    }
  } else if (
    areBoxesFilled[1] === areBoxesFilled[4] &&
    areBoxesFilled[1] === areBoxesFilled[7]
  ) {
    if (areBoxesFilled[1] === player1.token) {
      player1.wins.push(player1.token);
      game.player1Score = player1.wins.length;
      game.winner = player1.id;
      whoseTurn.innerText = "Player One Wins!";
      p1Score.innerText = `Score: ${game.player1Score}`;
      setTimeout("clearGameGrid()", 3000);
    } else if (areBoxesFilled[1] === player2.token) {
      player2.wins.push(player2.token);
      game.player2Score = player2.wins.length;
      game.winner = player2.id;
      whoseTurn.innerText = "Player Two Wins!";
      p2Score.innerText = `Score: ${game.player2Score}`;
      setTimeout("clearGameGrid()", 3000);
    }
  } else if (
    areBoxesFilled[2] === areBoxesFilled[5] &&
    areBoxesFilled[2] === areBoxesFilled[8]
  ) {
    if (areBoxesFilled[2] === player1.token) {
      player1.wins.push(player1.token);
      game.player1Score = player1.wins.length;
      game.winner = player1.id;
      whoseTurn.innerText = "Player One Wins!";
      p1Score.innerText = `Score: ${game.player1Score}`;
      setTimeout("clearGameGrid()", 3000);
    } else if (areBoxesFilled[2] === player2.token) {
      player2.wins.push(player2.token);
      game.player2Score = player2.wins.length;
      game.winner = player2.id;
      whoseTurn.innerText = "Player Two Wins!";
      p2Score.innerText = `Score: ${game.player2Score}`;
      setTimeout("clearGameGrid()", 3000);
    }
  } else if (
    areBoxesFilled[0] === areBoxesFilled[4] &&
    areBoxesFilled[0] === areBoxesFilled[8]
  ) {
    if (areBoxesFilled[4] === player1.token) {
      player1.wins.push(player1.token);
      game.player1Score = player1.wins.length;
      game.winner = player1.id;
      whoseTurn.innerText = "Player One Wins!";
      p1Score.innerText = `Score: ${game.player1Score}`;
      setTimeout("clearGameGrid()", 3000);
    } else if (areBoxesFilled[4] === player2.token) {
      player2.wins.push(player2.token);
      game.player2Score = player2.wins.length;
      game.winner = player2.id;
      whoseTurn.innerText = "Player Two Wins!";
      p2Score.innerText = `Score: ${game.player2Score}`;
      setTimeout("clearGameGrid()", 3000);
    }
  } else if (
    areBoxesFilled[2] === areBoxesFilled[4] &&
    areBoxesFilled[2] === areBoxesFilled[6]
  ) {
    if (areBoxesFilled[4] === player1.token) {
      player1.wins.push(player1.token);
      game.player1Score = player1.wins.length;
      game.winner = player1.id;
      whoseTurn.innerText = "Player One Wins!";
      p1Score.innerText = `Score: ${game.player1Score}`;
      setTimeout("clearGameGrid()", 3000);
    } else if (areBoxesFilled[4] === player2.token) {
      player2.wins.push(player2.token);
      game.player2Score = player2.wins.length;
      game.winner = player2.id;
      whoseTurn.innerText = "Player Two Wins!";
      p2Score.innerText = `Score: ${game.player2Score}`;
      setTimeout("clearGameGrid()", 3000);
    }
  }
}

function preventClick(e) {
  e.preventDefault();
}
