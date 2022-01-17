class Game {
  constructor() {
    this.player1 = new Player("x", String.fromCodePoint(0x2734), []);
    this.player2 = new Player("y", String.fromCodePoint(0x25FC), []);
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Turn = true;
    this.player2Turn = false;
    this.draw = false;
    this.winner = false;
    this.p1Wins = [];
    this.p2Wins = [];

    this.filledBoxes = 0;
    this.filledGrid = []
  }


  nextPlayer(player1, player2) {
    // player1.id = !player1.id;
    // player2.id = !player2.id;

    this.player1Turn = !this.player1Turn;
    this.player2Turn = !this.player2Turn;
  }

  winConditions(boxes) {
    if(boxes[0] === boxes[1]
      && boxes[1] === boxes[2] && boxes[0] != '') {
      return 1;
    } else if (boxes[3] === boxes[4] &&
    boxes[4] === boxes[5] && boxes[3] != '') {
      return 2;
    } else if (boxes[6] === boxes[7] &&
    boxes[7] === boxes[8] && boxes[6] != '') {
      return 3;
    } else if (boxes[0] === boxes[3] &&
    boxes[3] === boxes[6] && boxes[0] != '') {
      return 4;
    } else if (boxes[1] === boxes[4] &&
    boxes[4] === boxes[7] && boxes[1] != '') {
      return 5;
    } else if (boxes[2] === boxes[5] &&
    boxes[5] === boxes[8] && boxes[2] != '') {
      return 6;
    } else if (boxes[0] === boxes[4] &&
    boxes[4] === boxes[8] && boxes[0] != '') {
      return 7;
    } else if (boxes[2] === boxes[4] &&
    boxes[4] === boxes[6] && boxes[2] != '') {
      return 8;
    }
  }

  winningRow(winCondit) {
    if (winCondit === 1) {
      disableBoxes()
      toggleBoxWin(0)
      toggleBoxWin(1)
      toggleBoxWin(2)
    } else if (winCondit === 2) {
        disableBoxes()
        toggleBoxWin(3)
        toggleBoxWin(4)
        toggleBoxWin(5)
      } else if (winCondit === 3) {
          disableBoxes()
          toggleBoxWin(6)
          toggleBoxWin(7)
          toggleBoxWin(8)
        } else if (winCondit === 4) {
            disableBoxes()
            toggleBoxWin(0)
            toggleBoxWin(3)
            toggleBoxWin(6)
          } else if (winCondit === 5) {
              disableBoxes()
              toggleBoxWin(1)
              toggleBoxWin(4)
              toggleBoxWin(7)
            } else if (winCondit === 6) {
                disableBoxes()
                toggleBoxWin(2)
                toggleBoxWin(5)
                toggleBoxWin(8)
              } else if (winCondit === 7) {
                  disableBoxes()
                  toggleBoxWin(0)
                  toggleBoxWin(4)
                  toggleBoxWin(8)
                } else if (winCondit === 8) {
                    disableBoxes()
                    toggleBoxWin(2)
                    toggleBoxWin(4)
                    toggleBoxWin(6)
                  }

  }

  clearWinningRow(winCondit) {
    if(winCondit === 1) {
      toggleBoxRefresh(0)
      toggleBoxRefresh(1)
      toggleBoxRefresh(2)
    } else if (winCondit === 2) {
        toggleBoxRefresh(3)
        toggleBoxRefresh(4)
        toggleBoxRefresh(5)
      } else if (winCondit === 3) {
          toggleBoxRefresh(6)
          toggleBoxRefresh(7)
          toggleBoxRefresh(8)
        } else if (winCondit === 4) {
            toggleBoxRefresh(0)
            toggleBoxRefresh(3)
            toggleBoxRefresh(6)
          } else if (winCondit === 5) {
              toggleBoxRefresh(1)
              toggleBoxRefresh(4)
              toggleBoxRefresh(7)
            } else if (winCondit === 6) {
                toggleBoxRefresh(2)
                toggleBoxRefresh(5)
                toggleBoxRefresh(8)
              } else if (winCondit === 7) {
                  toggleBoxRefresh(0)
                  toggleBoxRefresh(4)
                  toggleBoxRefresh(8)
                } else if (winCondit === 8) {
                    toggleBoxRefresh(2)
                    toggleBoxRefresh(4)
                    toggleBoxRefresh(6)
                  }

  }

  checkForTieGame() {

    if(this.filledBoxes === 9 & !this.winner) {
      return this.draw = true
    }
  }

  areBoxesFilled() {
    for (var i = 0; i < boxes.length; i++) {
      game.filledGrid[i] = boxes[i].innerText;
    }
  }

  resetGame() {
    game.winner = false;
    game.boxesFilled = 0;
    clearGameGrid();
    disableBoxes();
    enableBoxes();


    // setTimeout("whichPlayersTurn()", 3000)

    // setTimeout(function() {
    //   p1Container.classList.remove("animation-short")
    //   p2Container.classList.remove("animation-short")
    //
    // }, 3000 )
  }
}
