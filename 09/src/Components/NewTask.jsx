import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleClick() {
    if (task.trim() === "") return;
    onAdd(task);
    setTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="New Task"
        className="bg-stone-200 px-2 py-1 rounded-sm w-64"
        onChange={handleChange}
        value={task}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
