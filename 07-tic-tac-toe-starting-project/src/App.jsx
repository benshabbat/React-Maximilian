import { useState } from "react";

import GameBoard from "../components/GameBoard";
import Player from "../components/Player";

function App() {
  const [playerActive, setPlayerActive] = useState("X")
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"player 1"} symbol={"X"} isActive={playerActive==="X"}/>
          <Player name={"player 2"} symbol={"O"} isActive={playerActive==="O"} />
        </ol>
        <GameBoard/>
      </div>
      game log
    </main>
  );
}

export default App;
