var game = new Game();

var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var boxes = document.querySelectorAll(".game-square");
var gameBoard = document.querySelector(".game-grid");
var playerContainer = document.querySelector("player-container");

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", playerClick);
}

function playerClick(e) {
  var location = e.target;

  if (location.innerText === "") {
    if (game.player1Turn) {
      location.innerText = game.player1.token.toString();
      game.filledBoxes += 1;
      game.nextPlayer(game.player1, game.player2);
      whichPlayersTurn();
    } else {
      location.innerText = game.player2.token.toString();
      game.filledBoxes += 1;
      game.nextPlayer(game.player1, game.player2);
      whichPlayersTurn();
    }
  }
  tieGameDisplay();
  checkForThreeInARow();
}

function clearGameGrid() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].innerText = "";
  }
}

function disableBoxes() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].disabled = true;
  }
}

function enableBoxes() {
  setTimeout(function () {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].disabled = false;
    }
    whichPlayersTurn();
  }, 0.5);
}

function whichPlayersTurn() {
  if (game.player2Turn) {
    whoseTurn.innerText = "It's Player Two's Turn!";
  } else {
    whoseTurn.innerText = "It's Player One's Turn!";
    game.player1Turn = true;
  }
}




function playerOneWinsDisplay() {
  // game.winner = game.player1.id;
  // game.player1.wins.push(game.player1.token);
  // game.player1Score = game.player1.wins.length;
  game.whichPlayerWon(game.player1);
  whoseTurn.innerText = "Player One Wins!";
  p1Score.innerText = `Score: ${game.player1Score}`;
  highlightScore(p1Score);
}


function playerTwoWinsDisplay() {
  // game.winner = game.player2.id;
  // game.player2.wins.push(game.player2.token);
  // game.player2Score = game.player2.wins.length;
  game.whichPlayerWon(game.player2);
  whoseTurn.innerText = "Player Two Wins!";
  p2Score.innerText = `Score: ${game.player2Score}`;
  highlightScore(p2Score);
}

function toggleBoxHighlight(index) {
  boxes[index].classList.toggle("highlight");
  boxes[index].classList.toggle("win-background");
}

function highlightScore(playerScore) {
  playerScore.classList.toggle("highlight");
}

function tieGameHighlight() {
  for (var i = 0; i < boxes.length; i++) {
    toggleBoxHighlight(i);
  }
}

function checkForThreeInARow() {
  // debugger;
  game.areBoxesFilled();

  if (game.winConditions(game.filledGrid) === 1) {
    if (game.filledGrid[0] === game.player1.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(1);
      playerOneWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(1);
        highlightScore(p1Score);
      }, 6000);
    } else if (game.filledGrid[0] === game.player2.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(1);
      playerTwoWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(1);
        highlightScore(p2Score);
      }, 6000);
    }
  } else if (game.winConditions(game.filledGrid) === 2) {
    if (game.filledGrid[3] === game.player1.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(2);
      playerOneWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(2);
        highlightScore(p1Score);
      }, 6000);
    } else if (game.filledGrid[3] === game.player2.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(2);
      playerTwoWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(2);
        highlightScore(p2Score);
      }, 6000);
    }
  } else if (game.winConditions(game.filledGrid) === 3) {
    if (game.filledGrid[6] === game.player1.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(3);
      playerOneWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(3);
        highlightScore(p1Score);
      }, 6000);
    } else if (game.filledGrid[6] === game.player2.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(3);
      playerTwoWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(3);
        highlightScore(p2Score);
      }, 6000);
    }
  } else if (game.winConditions(game.filledGrid) === 4) {
    if (game.filledGrid[0] === game.player1.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(4);
      playerOneWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(4);
        highlightScore(p1Score);
      }, 6000);
    } else if (game.filledGrid[0] === game.player2.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(4);
      playerTwoWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(4);
        highlightScore(p2Score);
      }, 6000);
    }
  } else if (game.winConditions(game.filledGrid) === 5) {
    if (game.filledGrid[1] === game.player1.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(5);
      playerOneWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(5);
        highlightScore(p1Score);
      }, 6000);
    } else if (game.filledGrid[1] === game.player2.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(5);
      playerTwoWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(5);
        highlightScore(p2Score);
      }, 6000);
    }
  } else if (game.winConditions(game.filledGrid) === 6) {
    if (game.filledGrid[2] === game.player1.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(6);
      playerOneWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(6);
        highlightScore(p1Score);
      }, 6000);
    } else if (game.filledGrid[2] === game.player2.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(6);
      playerTwoWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(6);
        highlightScore(p2Score);
      }, 6000);
    }
  } else if (game.winConditions(game.filledGrid) === 7) {
    console.log(game.winConditions(game.filledGrid));
    if (game.filledGrid[0] === game.player1.token) {
      game.toggleWinningRowHighlight(7);
      playerOneWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(7);
        highlightScore(p1Score);
      }, 6000);
    } else if (game.filledGrid[0] === game.player2.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(7);
      playerTwoWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(7);
        highlightScore(p2Score);
      }, 6000);
    }
  } else if (game.winConditions(game.filledGrid) === 8) {
    if (game.filledGrid[2] === game.player1.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(8);
      playerOneWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(8);
        highlightScore(p1Score);
      }, 6000);
    } else if (game.filledGrid[2] === game.player2.token) {
      console.log(game.winConditions(game.filledGrid));
      game.toggleWinningRowHighlight(8);
      playerTwoWinsDisplay();
      setTimeout(function () {
        game.resetGame();
        game.toggleWinningRowHighlight(8);
        highlightScore(p2Score);
      }, 6000);
    }
  }
}

function tieGameDisplay() {
  game.checkForTieGame();

  if (game.draw) {
    whoseTurn.innerText = "It's a Tie! Play Again.";
    tieGameHighlight();
    setTimeout(function () {
      game.resetGame();
      tieGameHighlight();
    }, 6000);
  }
}
