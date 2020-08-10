# Project-1 

Model-view-controller

View - html
Model - logic (js)
Controller (bridge)

==========================================================================

Model
Win condition
Tie condition (play again)
Player’s turn
Manage game state

Data
Const gameBoard = an array of 6x6 with all elements set to 0 (blank state)
Const player1 = 1 
Const player2 = 2
Const playerTurn = player1

Function getPlayerTurn() {
 return playerTurn
}

Function updatePlayerTurn(previousPlayer) {
	if previousPlayer is equal to player1 return player2. Else  return player1
}

Function updateBoard(player, x, y) {
	for (I=boardGame.length - 1; I >= 0 ; I++) {
		if boardGame[I][y] is 0
			boardGame[I][y] = player
			break
	}
}

Function checkWinCondition(player) {
	// horizontal check
	// vertical check
	// diagonal check
}
	
===================================================================




const horizontalCount = 0
	for(I=0; I<boardGame.length; I++) {
		const y=0
		while (y < 5) {
			if board[I][j] is equal to player {
			horizontalCount += 1
			y += 1
		}
	}

	}
}




0  	0	1  	1 	0  	0


0  	0	0  	0	0  	0


0  	0	0  	0 	0  	0


0  	0	0  	0	0  	0


2  	0	0  	0	0  	0


1 	0	1  	0	0  	0
