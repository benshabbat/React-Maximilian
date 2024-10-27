import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [namePlayer, setNamePlayer] = useState(name);


  function handleEditClick() {
    setIsEdit((edited) => !edited);
  }

  
  function handleChangeName(e) {
    const {value} = e.target
    setNamePlayer(value);
  }
  return (
    <li>
      <span className="player">
        {isEdit ? (
          <input type="text" value={namePlayer} onChange={handleChangeName} required/>
        ) : (
          <span className="player-name">{namePlayer}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
