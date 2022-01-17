class Game {
  constructor() {
    this.player1 = new Player("x", String.fromCodePoint(0x2734), []);
    this.player2 = new Player("y", String.fromCodePoint(0x25fc), []);
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Turn = true;
    this.player2Turn = false;
    this.draw = false;
    this.winner = false;
    this.p1Wins = [];
    this.p2Wins = [];

    this.filledBoxes = 0;
    this.filledGrid = [];
  }

  nextPlayer(player1, player2) {
    this.player1Turn = !this.player1Turn;
    this.player2Turn = !this.player2Turn;
  }

  winConditions(boxes) {
    if (boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] != "") {
      return 1;
    } else if (
      boxes[3] === boxes[4] &&
      boxes[4] === boxes[5] &&
      boxes[3] != ""
    ) {
      return 2;
    } else if (
      boxes[6] === boxes[7] &&
      boxes[7] === boxes[8] &&
      boxes[6] != ""
    ) {
      return 3;
    } else if (
      boxes[0] === boxes[3] &&
      boxes[3] === boxes[6] &&
      boxes[0] != ""
    ) {
      return 4;
    } else if (
      boxes[1] === boxes[4] &&
      boxes[4] === boxes[7] &&
      boxes[1] != ""
    ) {
      return 5;
    } else if (
      boxes[2] === boxes[5] &&
      boxes[5] === boxes[8] &&
      boxes[2] != ""
    ) {
      return 6;
    } else if (
      boxes[0] === boxes[4] &&
      boxes[4] === boxes[8] &&
      boxes[0] != ""
    ) {
      return 7;
    } else if (
      boxes[2] === boxes[4] &&
      boxes[4] === boxes[6] &&
      boxes[2] != ""
    ) {
      return 8;
    }
  }

  toggleWinningRowHighlight(winCondit) {
    if (winCondit === 1) {
      disableBoxes();
      toggleBoxHighlight(0);
      toggleBoxHighlight(1);
      toggleBoxHighlight(2);
    } else if (winCondit === 2) {
      disableBoxes();
      toggleBoxHighlight(3);
      toggleBoxHighlight(4);
      toggleBoxHighlight(5);
    } else if (winCondit === 3) {
      disableBoxes();
      toggleBoxHighlight(6);
      toggleBoxHighlight(7);
      toggleBoxHighlight(8);
    } else if (winCondit === 4) {
      disableBoxes();
      toggleBoxHighlight(0);
      toggleBoxHighlight(3);
      toggleBoxHighlight(6);
    } else if (winCondit === 5) {
      disableBoxes();
      toggleBoxHighlight(1);
      toggleBoxHighlight(4);
      toggleBoxHighlight(7);
    } else if (winCondit === 6) {
      disableBoxes();
      toggleBoxHighlight(2);
      toggleBoxHighlight(5);
      toggleBoxHighlight(8);
    } else if (winCondit === 7) {
      disableBoxes();
      toggleBoxHighlight(0);
      toggleBoxHighlight(4);
      toggleBoxHighlight(8);
    } else if (winCondit === 8) {
      disableBoxes();
      toggleBoxHighlight(2);
      toggleBoxHighlight(4);
      toggleBoxHighlight(6);
    }
  }

  checkForTieGame() {
    if ((this.filledBoxes === 9) & !this.winner) {
      return (this.draw = true);
    }
  }

  areBoxesFilled() {
    for (var i = 0; i < boxes.length; i++) {
      game.filledGrid[i] = boxes[i].innerText;
    }
  }

  resetGame() {
    game.winner = false;
    game.draw = false;
    this.filledBoxes = 0;
    this.filledGrid = [];
    clearGameGrid();
    disableBoxes();
    enableBoxes();
  }
}
