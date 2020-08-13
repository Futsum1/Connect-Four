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
const msgWin = document.getElementById('won')

//Event Listeners
document.querySelector("table").addEventListener("click", updateBoard);
document.querySelector("#reset-button").addEventListener("click", initialize);

// Functions
function initialize() {
    gameBoard = new Array(36).fill(null);
    playerTurn = 1;
    winner = false;
    msgWin.innerText = null;
    render();
} 

function render(){
    //gameBoard.forEach(function (cirlce, idx) {
       // circles[idx].style.backgroundColor = lookup[cirlce];
    if (winner) {
        msgWin.innerText =  lookup[playerTurn] + " won ";
    } else {
        message.innerHTML = lookup[playerTurn] 
    }
    gameBoard.forEach(function (cirlce, idx) {
        circles[idx].style.backgroundColor = lookup[cirlce];
    })
}

function updateBoard(event) {
    let index = parseInt(event.target.id.replace("c", ""));
    if (gameBoard[index] || winner) {
        return;
    }
    while(!gameBoard[index] && index < 36) {
        index += 6;
    }
    index -= 6;
    gameBoard[index] = playerTurn;
    winner = checkWinner();
    render();
    playerTurn *= -1;
}

 function checkWinner(){
     return gameBoard.some(function(element, idx) {
         // horizontal
         return (idx % 6 < 3 && Math.abs(gameBoard[idx] + gameBoard[idx + 1] + gameBoard[idx + 2] + gameBoard[idx + 3]) === 4) ||
         // ver
         (idx < 18 && Math.abs(gameBoard[idx] + gameBoard[idx + 6] + gameBoard[idx + 12] + gameBoard[idx + 18]) === 4) ||
         (idx % 6 < 3 && Math.abs(gameBoard[idx] + gameBoard[idx + 7] + gameBoard[idx + 14] + gameBoard[idx + 21]) === 4) ||
         (idx % 6 > 2 && idx < 18 && Math.abs(gameBoard[idx] + gameBoard[idx + 5] + gameBoard[idx + 10] + gameBoard[idx + 15]) === 4)
     })
 }

initialize();


