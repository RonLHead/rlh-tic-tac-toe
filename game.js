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

  winConditions() {}

  gameDraw() {}

  resetGame() {}
}
