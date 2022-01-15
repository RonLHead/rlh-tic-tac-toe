
var game = new Game();

var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var boxes = document.querySelectorAll(".game-square");
var gameBoard = document.querySelector(".game-grid");
var p1Container = document.getElementById("p-one")
var p2Container = document.getElementById("p-two")
// var box1 = boxes[0].innerText;
// var box2 = boxes[1].innerText;
// var box3 = boxes[2].innerText;
// var box4 = boxes[3].innerText;
// var box5 = boxes[4].innerText;
// var box6 = boxes[5].innerText;
// var box7 = boxes[6].innerText;
// var box8 = boxes[7].innerText;
// var box9 = boxes[8].innerText;
// var areBoxesFilled = [, box2, box3, box4, box5, box6, box7, box8, box9];

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", addToken);

}

function addToken(e) {
  var location = e.target;

  if (location.innerText === "") {
    if (game.player1Turn) {
      location.innerText = game.player1.token.toString();
      location.classList.add(game.player1.id)
      game.nextPlayer(game.player1, game.player2);
      whichPlayersTurn();

    } else {
      location.innerText = game.player2.token.toString();
      location.classList.add(game.player2.id)
      game.nextPlayer(game.player1, game.player2);
      whichPlayersTurn();

    }
  }
  threeInARow();
  tieGame();

}

function disableBoxes() {
  for(var i =0; i < boxes.length; i++) {
    // console.log(boxes)
    boxes[i].disabled = true;
  }
}

function enableBoxes() {
  setTimeout(function() {
    for(var i =0; i < boxes.length; i++) {
      // console.log(boxes)
      boxes[i].disabled = false;
    } whichPlayersTurn();
  }, 2000);
}

function whichPlayersTurn() {
  if (game.player2Turn) {
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
    game.resetGame();
  }
}

function playerOneWinsDisplay() {
  game.winner = game.player1.id;
  game.player1.wins.push(game.player1.token);
  game.player1Score = game.player1.wins.length;
  whoseTurn.innerText = "Player One Wins!";
  p1Score.innerText = `Score: ${game.player1Score}`;
  p1Container.classList.add("animation-short")
}

function playerTwoWinsDisplay() {
  game.winner = game.player2.id;
  game.player2.wins.push(game.player2.token);
  game.player2Score = game.player2.wins.length;
  whoseTurn.innerText = "Player Two Wins!";
  p2Score.innerText = `Score: ${game.player2Score}`;
  p2Container.classList.add("animation-short")
}

function threeInARow() {
  for (var i = 0; i < boxes.length; i++) {
    game.areBoxesFilled[i] = boxes[i].innerText;
  }

  if (game.winConditions(game.areBoxesFilled) === 1) {
    if (boxes[0].classList[1] === game.player1.id) {
      //'✖️'
      console.log(game.winConditions(game.areBoxesFilled))

      playerOneWinsDisplay();
      game.resetGame()

    } else if (game.areBoxesFilled[0] === game.player2.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerTwoWinsDisplay();
      game.resetGame();
    }
  } else if (game.winConditions(game.areBoxesFilled) === 2) {
    if (game.areBoxesFilled[3] === game.player1.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerOneWinsDisplay();
      game.resetGame();
    } else if (game.areBoxesFilled[3] === game.player2.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerTwoWinsDisplay();
      game.resetGame();
    }
  } else if (game.winConditions(game.areBoxesFilled) === 3) {
    if (game.areBoxesFilled[6] === game.player1.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerOneWinsDisplay();
      game.resetGame();
    } else if (game.areBoxesFilled[6] === game.player2.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerTwoWinsDisplay();
      game.resetGame();
    }
  } else if (game.winConditions(game.areBoxesFilled) === 4) {
    if (game.areBoxesFilled[0] === game.player1.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerOneWinsDisplay();
      game.resetGame();
    } else if (game.areBoxesFilled[0] === game.player2.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerTwoWinsDisplay();
      game.resetGame();
    }
  } else if (game.winConditions(game.areBoxesFilled) === 5) {
    if (game.areBoxesFilled[1] === game.player1.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerOneWinsDisplay();
      game.resetGame();
    } else if (game.areBoxesFilled[1] === game.player2.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerTwoWinsDisplay();
      game.resetGame();
    }
  } else if (game.winConditions(game.areBoxesFilled) === 6) {
    if (game.areBoxesFilled[2] === game.player1.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerOneWinsDisplay();
      game.resetGame();
    } else if (game.areBoxesFilled[2] === game.player2.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerTwoWinsDisplay();
      game.resetGame();
    }
  } else if (game.winConditions(game.areBoxesFilled) === 7) {
    if (game.areBoxesFilled[4] === game.player1.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerOneWinsDisplay();
      game.resetGame();
    } else if (game.areBoxesFilled[4] === game.player2.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerTwoWinsDisplay();
      game.resetGame();
    }
  } else if (game.winConditions(game.areBoxesFilled) === 8) {
    if (game.areBoxesFilled[4] === game.player1.token) {
      console.log(game.winConditions(areBoxesFilled))

      playerOneWinsDisplay();
      game.resetGame();
    } else if (game.areBoxesFilled[4] === game.player2.token) {
      console.log(game.winConditions(game.areBoxesFilled))

      playerTwoWinsDisplay();
      game.resetGame();
    }
  }
}
