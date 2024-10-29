

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ playerSelectSquare, dataGame }) {
  let gameBoard = board;

  for (const data of dataGame) {
    const { player, square } = data;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  
  return (
    <ol id="game-board">
      {gameBoard.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((col, indexCol) => (
              <li key={indexCol}>
                <button onClick={() => playerSelectSquare(indexRow, indexCol)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
