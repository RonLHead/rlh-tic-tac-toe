class Game {
  constructor(player1, playe2) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Turn = true;
    this.player2Turn = false;
    this.draw = false;
    this.winner = false;
  }

  nextPlayer(player1, player2) {
    player1.id = !player1.id;
    player2.id = !player2.id;

    this.player1Turn = player1.id;
    this.player2Turn = player2.id;
  }

  winConditions(gameArray) {
    // debugger

    if(gameArray[0] === gameArray[1]
      && gameArray[1] === gameArray[2] && gameArray[0] != '') {
      return 1;
    } else if (gameArray[3] === gameArray[4] &&
    gameArray[4] === gameArray[5] && gameArray[3] != '') {
      return 2;
    } else if (gameArray[6] === gameArray[7] &&
    gameArray[7] === gameArray[8] && gameArray[6] != '') {
      return 3;
    } else if (gameArray[0] === gameArray[3] &&
    gameArray[3] === gameArray[6] && gameArray[0] != '') {
      return 4;
    } else if (gameArray[1] === gameArray[4] &&
    gameArray[4] === gameArray[7] && gameArray[1] != '') {
      return 5;
    } else if (gameArray[2] === gameArray[5] &&
    gameArray[5] === gameArray[8] && gameArray[2] != '') {
      return 6;
    } else if (gameArray[0] === gameArray[4] &&
    gameArray[4] === gameArray[8] && gameArray[0] != '') {
      return 7;
    } else if (gameArray[2] === gameArray[4] &&
    gameArray[4] === gameArray[6] && gameArray[2] != '') {
      return 8;
    }
  }



  resetGame() {
    clearGameGrid();
    for(var i =0; i < boxes.length; i++) {
      // console.log(boxes)
      boxes[i].disabled = true;
    }
    setTimeout(function(){
      for(var i =0; i < boxes.length; i++) {
        // console.log(boxes)
        boxes[i].disabled = false;
      }
      whichPlayersTurn();
    }, 2000);

    // setTimeout("whichPlayersTurn()", 3000)

    // setTimeout(function() {
    //   p1Container.classList.remove("animation-short")
    //   p2Container.classList.remove("animation-short")
    //
    // }, 3000 )
  }
}
