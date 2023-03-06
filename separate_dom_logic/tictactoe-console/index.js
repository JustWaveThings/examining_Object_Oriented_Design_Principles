// TTT JS Console Game

function Gameboard() {
	const rows = 3;
	const columns = 3;
	const board = [];

	// create a 2d array that will represent the state of the game board
	// use nested loop

	for (i = 0; i < rows; i++) {
		board[i] = [];
		for (j = 0; j < columns; j++) {
			board[i].push(Cell());
		}
	}

	// This will be the method of getting the entire board that our
	// UI will eventually need to render it.

	// this allows access to the value of the board but not accessing the board
	const getBoard = () => board;

	// now this is different mechanics than connect for so I need to go off script

	const placeMarker = (column, row, player) => {
		const pendingMove = board[row][column].getValue();
		console.log('pendingMove', pendingMove);
		if (pendingMove !== '-') return;

		board[row][column].addMarker(player);
	};

	const printBoard = () => {
		const boardWithCellValues = board.map((row) =>
			row.map((cell) => cell.getValue())
		);
		console.log(boardWithCellValues);
	};

	return { getBoard, placeMarker, printBoard };
}

function Cell() {
	let value = '-';

	const addMarker = (player) => {
		value = player;
	};

	const getValue = () => value;

	return {
		addMarker,
		getValue,
	};
}

function GameController(
	playerOneName = 'Player One',
	playerTwoName = 'Player Two'
) {
	const board = Gameboard();

	const players = [
		{
			name: playerOneName,
			marker: 'X',
		},
		{
			name: playerTwoName,
			marker: 'O',
		},
	];

	let activePlayer = players[0];

	const switchPlayerTurn = () => {
		activePlayer =
			activePlayer === players[0] ? players[1] : players[0];
	};

	const getActivePlayer = () => activePlayer;

	const printNewRound = () => {
		board.printBoard();
		console.log(`${getActivePlayer().name}'s turn.`);
	};

	const playRound = (column, row) => {
		console.log(
			`Marking ${getActivePlayer.name}'s space on C/R - ${column} / ${row}...`
		);
		board.placeMarker(column, row, getActivePlayer().marker);

		// check for win condition here  TODO

		switchPlayerTurn();
		printNewRound();
	};

	// initial play game message
	printNewRound();

	return {
		playRound,
		getActivePlayer,
	};
}

const game = GameController();
