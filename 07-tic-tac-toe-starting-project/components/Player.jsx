import { useState } from "react";

export default function Player({ name,symbol}) {
  const [isEdit,setIsEdit]=useState(false)
  function handleEditClick(){
    setIsEdit(!isEdit)
  }
  return (
    <li>
      <span className="player">
        {isEdit?<input type="text" value={name}/>:<span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      {isEdit?<button onClick={handleEditClick}>Save</button>:<button onClick={handleEditClick}>Edit</button>}
    </li>
  );
}
