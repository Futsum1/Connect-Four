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
//const msg = document.getElementById('won');

//Event Listeners
document.querySelector("table").addEventListener("click", updateBoard);
document.querySelector("#reset-button").addEventListener("click", initialize);

// Functions
function initialize() {
    gameBoard = new Array(36).fill(null);
    playerTurn = 1;
    render();
    
} 
function render(){
    gameBoard.forEach(function (cirlce, idx) {
    circles[idx].style.backgroundColor = lookup[cirlce];
    
    
    
})
}
function updateBoard(event) {
    let index = parseInt(event.target.id.replace("c", ""));
    if (horizontalWinner()){ 
        //return msg.innerText = "winner"}
    if (gameBoard[index]) {
       // return;
    }
    while(!gameBoard[index] && index < 36) {
        index += 6;
    }
    index -= 6;
    gameBoard[index] = playerTurn;
    console.log(horizontalWinner());
    message.innerHTML = lookup[playerTurn]
    playerTurn *= -1;
    circles[index].style.backgroundColor = lookup[playerTurn]
    console.log(gameBoard);
    //gameBoard.forEach(fucntion(checkForWinner))
}



    function verticalWinner(circleToCheck) {
        // Check if index + (index + 1) + (index + 1) + (index + 1) === 4
      }


 function horizontalWinner(){
     return gameBoard.some(function(element, idx) {
         return Math.abs(gameBoard[idx] + gameBoard[idx +1] + gameBoard[idx +2] + gameBoard[idx +3] === 4 && idx % 6 < 3)
     })
 }
// check if index + (1 row down) + (1 row down) + (1 row down) === 4

initialize();


