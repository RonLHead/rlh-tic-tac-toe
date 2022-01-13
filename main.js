var p1Wins = [];
var p2Wins = [];

//query selectors go here
var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("pl1Score");
var p2Score = document.getElementById("p2Score")
var box1 = document.getElementById("box1");
var boxes = document.querySelectorAll(".game-square")

//event listeners go here
// box1.addEventListener("click", addToken);

//functions go here
// function addToken() {
//   var playerOne = new Player(event.target.id, "X", 0);
//   //add if statement to see whose turn
//   box1.innerHTML += `
//   <article class="game-square" id="box1">${playerOne.token}</article`;
// }
for(var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', handleClick)
}

var player1 = new Player("p1", "X", 0)
var player2 = new Player("p2", "O", 0)

var game = new Game(player1, player2)
console.log(game.player1Turn)
function handleClick(e) {
  var location = e.target;
  // console.log(location)
  // console.log(box1)
  // console.log(game.player1Turn)
  if(game.player1Turn) {
    location.innerHTML += `
    <article class="game-square player-one-token"
    id="${e.target.id}">
    ${player1.token}</article>`
    // console.log(player1.token)
    game.player1Turn = !game.player1Turn;
  } else if(game.playe2Turn){
    location.innerHTML += `
    <article class="game-square player-two-token"
    id="${e.target.id}">
    ${player2.token}</article>`
    console.log(player1.token)
    game.player2Turn = !game.player2Turn;
  }
    
}
