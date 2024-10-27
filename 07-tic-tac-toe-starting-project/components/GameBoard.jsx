const board =
[
    [null, null,null],
    [null, null,null],
    [null, null,null],
]


export default function GameBoard() {
  return (
    <ol>{board.map((row,indexRow)=>{
        return <li key={indexRow}>{row.map((col,indexCol)=>{
            return <li key={indexCol}>{col}</li>
        })}</li>
    })}</ol>
  )
}
