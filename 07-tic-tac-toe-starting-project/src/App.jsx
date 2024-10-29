import { useState } from "react";

import GameBoard from "../components/GameBoard";
import Player from "../components/Player";
import Log from "../components/Log";

function App() {
  const [playerActive, setPlayerActive] = useState("X");
  const [dataGame, setDataGame] = useState([]);
  function playerSelectSquare(row, col) {
    setPlayerActive((prev) => (prev === "X" ? "O" : "X"));
    setDataGame((prevData) => {
      let player = "X";
      if (prevData.length > 0 && prevData[0].player === "X") {
        player = "O";
      }
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
      <Log dataGame={dataGame}/>
    </main>
  );
}

export default App;
