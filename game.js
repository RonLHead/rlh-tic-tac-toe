class Game {
  constructor() {
    this.player1Score = player1.wins;
    this.player2Score = player2.wins;
    this.player1Turn = true;
    this.player2Turn = false;
    this.draw = false;
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
