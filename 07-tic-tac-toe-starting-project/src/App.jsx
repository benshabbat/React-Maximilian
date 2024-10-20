import Player from "../components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <Player name={"player 1"} symbol={"X"}/>
          </li>
          <li>
            <Player name={"player 2"} symbol={"O"}/>
          </li>
        </ol>
        Game board
      </div>
      game log
    </main>
  );
}

export default App;
