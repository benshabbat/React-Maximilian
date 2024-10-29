

export default function GameBoard({ playerSelectSquare, gameBoard }) {


  return (
    <ol id="game-board">
      {gameBoard.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((col, indexCol) => (
              <li key={indexCol}>
                <button
                  onClick={() => playerSelectSquare(indexRow, indexCol)}
                  disabled={col !== null}
                >
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
