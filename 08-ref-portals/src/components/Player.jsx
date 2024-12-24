import { useState,useRef } from "react";

export default function Player() {
  const [name, setName] = useState("");
  const inputName=useRef();

  const handleClick = () => setName(inputName.current.value);
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input ref={inputName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
