import NewTask from "./NewTask";

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-stone-700">Tasks</h2>
      <NewTask onAdd={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project dosent have any tasks yet.
        </p>
      )}
      <ul>
        {tasks?.map((task) => (
          <li key={task.id} className="flex items-center gap-4">
            <p className="text-stone-800">{task.text}</p>
            <button
              className="text-stone-700 hover:text-stone-950"
              onClick={()=>onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
