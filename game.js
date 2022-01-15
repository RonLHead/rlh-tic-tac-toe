class Game {
  constructor() {
    this.player1 = new Player("x", String.fromCodePoint(0x2734), []);
    this.player2 = new Player("y", String.fromCodePoint(0x25FC), []);
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Turn = true;
    this.player2Turn = false;
    this.draw = false;
    this.winner = null;
    this.p1Wins = [];
    this.p2Wins = [];
    // this.box1 = null;
    // this.box2 = null;
    // this.box3 = null;
    // this.box4 = null;
    // this.box5 = null;
    // this.box6 = null;
    // this.box7 = null;
    // this.box8 = null;
    // this.box9 = null;
    this.areBoxesFilled = [];
  }


  nextPlayer(player1, player2) {
    // player1.id = !player1.id;
    // player2.id = !player2.id;

    this.player1Turn = !this.player1Turn;
    this.player2Turn = !this.player2Turn;
  }

  winConditions(gameArray) {
    // debugger
    //boxes[1].innerText
    for(var i =0; i < gameArray.length; i++) {
      
    }
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
    disableBoxes();
    game.winner = false;
    enableBoxes();


    // setTimeout("whichPlayersTurn()", 3000)

    // setTimeout(function() {
    //   p1Container.classList.remove("animation-short")
    //   p2Container.classList.remove("animation-short")
    //
    // }, 3000 )
  }
}
