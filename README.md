# Tic-Tac-Toe
This project houses a simple game of tic-tac-toe that can be played on a web browser. The game takes two players (player 1, who plays first, and player 2), and displays a 3 x 3 grid of boxes. On each player's turn they can click on any empty square, which will display their unique token. The game determines the winner when the first player has 3 tokens in a row in any direction (horizontal, vertical, or diagonal). If all boxes are filled but no player has three in a row, the game is a draw.

## Contributor
- [Ron Head](https://github.com/RonLHead)

## Technologies Used
- JavaScript
- Html
- CSS

## [Deploy Link](https://github.com/RonLHead/rlh-tic-tac-toe)

## Instructions For Use

- Index.html will open a new Tic-Tac-Toe game on the user's browser
- The new game will display an empty grid of nine boxes (arranged in three rows and three columns). A new game will default to Player One's turn first, which will be displayed under the heading.
- Player One goes first by clicking one of the empty boxes. Player One's token is a star symbol, which will fill the box that the user clicks.
- It will then be Player Two's turn, and this message will displayed in the subheading. Just like in the previous step, Player Two can click on any empty box, which will fill it with Player Two's token, a white square.

- This back-and-forth sequence will continue until one of outcomes occur:
  1. A player fills three boxes in a row with their respective token. This registers in a possible direction:
    - Horizontal
    - Vertical
    - Diagonal
  2. All boxes are clicked and filled but no player has three in a row, resulting in a tie game

1. In the case of the first outcome, the game pauses with the winning row will be highlighted on the game grid and the winning player displayed in the subheading. The winning player's score is incremented in their respective section of the game (Player One above the game grid and Player Two below). After roughly five seconds, the tokens are cleared and a new game ensues.

![gameplay-gif](https://raw.githubusercontent.com/RonLHead/rlh-tic-tac-toe/iteration7/readme/assets/tic-tac-toe-gameplay.gif?token=GHSAT0AAAAAABQRS6XOORLTUSONZVCOBD5WYPG6JEA)

2. In the case of the second outcome, the game pauses and the subheading displays a tie game. No player's score increments. After roughly five seconds, a new game ensues.

![tiegame-gif](.assets/tic-tac-toe-tiegame.gif)

- Each player's score will continue to increment as the game continues. The scores will reset to zero once the user refreshes the browser.

## Future Additions
- Implement local storage to save and display the scores of previous games.
- Allow users to select their own unique tokens from a list of tokens.
