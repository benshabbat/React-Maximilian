import { useState } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { getWinner, getBoard } from "./utils.js";
import GameOver from "./components/GameOver.jsx";

function getPlayerActive(data) {
  let player = "X";
  if (data.length > 0 && data[0].player === "X") {
    player = "O";
  }
  return player;
}
function App() {
  const [players, setPlayers] = useState({
    X: "player 1",
    O: "player 2",
  });
  const [dataGame, setDataGame] = useState([]);
  const playerActive = getPlayerActive(dataGame);

  function playerSelectSquare(row, col) {
    setDataGame((prevData) => {
      let player = getPlayerActive(prevData);
      const updateData = [{ square: { row, col }, player }, ...prevData];
      return updateData;
    });
  }

  const gameBoard = getBoard(dataGame);
  const winner = getWinner(gameBoard, players);

  const hasDraw = !winner && dataGame.length === 9;
  function handleRematch() {
    setDataGame([]);
  }
  function handleEditNamePlayer(symbol, newName) {
    setPlayers((prev) => {
      return { ...prev, [symbol]: newName };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"player 1"}
            symbol={"X"}
            isActive={playerActive === "X"}
            handleEditNamePlayer={handleEditNamePlayer}
          />
          <Player
            name={"player 2"}
            symbol={"O"}
            isActive={playerActive === "O"}
            handleEditNamePlayer={handleEditNamePlayer}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRematch={handleRematch} />
        )}
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
