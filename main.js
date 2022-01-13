var p1Wins = [];
var p2Wins = [];

//query selectors go here
var whoseTurn = document.getElementById("whoseTurn");
var p1Score = document.getElementById("pl1Score");
var p2Score = document.getElementById("p2Score")
// var box1 = document.getElementById("box1");
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

var handleClick = (e) => {
  var location = e.target.id[1];

  console.log("location", location)
}

for(var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', handleClick)
}
