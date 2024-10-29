import React from "react";

export default function Log({ dataGame }) {
  return (
    <ol id="log">
      {dataGame.map((data, index) => {
        const { player, square } = data;
        const { row, col } = square;
        return (
          <li key={index}>
            {player} selected {`[${row}][${col}]`}
          </li>
        );
      })}
    </ol>
  );
}
