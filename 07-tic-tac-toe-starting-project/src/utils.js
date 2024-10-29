import { WINNING_COMBINATIONS } from "./winning-combinations.js";
const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];


export function getBoard(dataGame) {
  let gameBoard = [...board.map((inner) => [...inner])];

  for (const data of dataGame) {
    const { player, square } = data;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

export function getWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const options1 = gameBoard[combination[0].row][combination[0].col];
    const options2 = gameBoard[combination[1].row][combination[1].col];
    const options3 = gameBoard[combination[2].row][combination[2].col];

    if (options1 && options1 === options2 && options1 === options3) {
      winner = players[options1];
    }
  }
  return winner;
}
