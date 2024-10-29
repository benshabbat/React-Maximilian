import { useState } from "react";

import GameBoard from "../components/GameBoard";
import Player from "../components/Player";
import Log from "../components/Log";
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
        <GameBoard
          playerSelectSquare={playerSelectSquare}
          dataGame={dataGame}
        />
      </div>
      <Log dataGame={dataGame} />
    </main>
  );
}

export default App;
