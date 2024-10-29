import React from 'react'

export default function Log({dataGame}) {
    const {player,square} = dataGame;
    const { row, col } = square;
  return (
    <ol id='log'>Log</ol>
  )
}
