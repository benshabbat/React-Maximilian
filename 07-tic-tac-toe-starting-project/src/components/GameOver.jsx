import React from "react";

export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <p>You won {winner}</p>
      <p>
        <button>Rematch</button>
      </p>
    </div>
  );
}
