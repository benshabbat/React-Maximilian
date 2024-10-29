import { useState } from "react";

import GameBoard from "../components/GameBoard";
import Player from "../components/Player";
import Log from "../components/Log";

function App() {
  const [playerActive, setPlayerActive] = useState("X");
  const [dataPlayer, setDataPlayer] = useState();
  function playerSelectSquare() {
    setPlayerActive((prev) => (prev === "X" ? "O" : "X"));
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
          symbol={playerActive}
        />
      </div>
      <Log/>
    </main>
  );
}

export default App;
