import { useState } from "react";

export default function Player({ name,symbol}) {
  const [isEdit,setIsEdit]=useState(false)
  const [namePlayer,setNamePlayer]=useState(name)
  function handleEditClick(){
    setIsEdit(edited=>!edited)
  }
  function handleChangeName(){
    setIsEdit(edited=>!edited)
    }
  return (
    <li>
      <span className="player">
        {isEdit?<input type="text" value={namePlayer}/>:<span className="player-name">{namePlayer}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleChangeName}>{isEdit?"Save":"Edit"}</button>
      {/* {isEdit?<button onClick={handleChangeName}>Save</button>:<button onClick={handleEditClick}>Edit</button>} */}
    </li>
  );
}
