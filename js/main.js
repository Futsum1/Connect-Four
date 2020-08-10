const lookup = {
    "1" : "red",
    "-1" : "lime",
    null : "white",
};
// app variables
let gameBoard, playerTurn, winner;

// cache elements
const circles = document.querySelectorAll("td");
const message = document.querySelector("h1 span");

//Event Listeners
document.querySelector("table").addEventListener("click", updateBoard);
document.querySelector("#reset-button").addEventListener("click", initialize);

// Functions
function initialize() {
    gameBoard = new Array(36).fill(null);
    playerTurn = 1;
} 

function updateBoard(event) {
    let index = parseInt(event.target.id.replace("c", ""));
    if (gameBoard[index]) {
        return;
    }
    while(!gameBoard[index] && index < 36) {
        index += 6;
    }
    index -= 6;
    gameBoard[index] = playerTurn;
    message.innerHTML = lookup[playerTurn]
    playerTurn *= -1;
    circles[index].style.backgroundColor = lookup[playerTurn];
}

initialize();


