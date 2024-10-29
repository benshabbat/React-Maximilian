import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getPlayerActive(data) {
  let player = "X";
  if (data.length > 0 && data[0].player === "X") {
    player = "O";
  }
  return player;
}
function App() {
  const [dataGame, setDataGame] = useState([]);
  const playerActive = getPlayerActive(dataGame);
  function playerSelectSquare(row, col) {
    setDataGame((prevData) => {
      let player = getPlayerActive(prevData);
      const updateData = [{ square: { row, col }, player }, ...prevData];
      return updateData;
    });
  }

  let gameBoard = board;

  for (const data of dataGame) {
    const { player, square } = data;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner = null;
  for (const comination of WINNING_COMBINATIONS) {
    const options1 = gameBoard[comination[0].row][comination[0].col];
    const options2 = gameBoard[comination[1].row][comination[1].col];
    const options3 = gameBoard[comination[2].row][comination[2].col];

    if (options1 && options1 === options2 && options1 === options3) {
      winner = options1;
    }
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"player 1"}
            symbol={"X"}
            isActive={playerActive === "X"}
          />
          <Player
            name={"player 2"}
            symbol={"O"}
            isActive={playerActive === "O"}
          />
        </ol>
        {winner && <GameOver winner={winner}/>}
        <GameBoard
          playerSelectSquare={playerSelectSquare}
          gameBoard={gameBoard}
        />
      </div>
      <Log dataGame={dataGame} />
    </main>
  );
}

export default App;
