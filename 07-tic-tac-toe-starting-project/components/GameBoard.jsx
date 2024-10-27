const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {board.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((col, indexCol) => (
              <li key={indexCol}>
                <button>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
