import NewTask from "./NewTask";

export default function Tasks() {
  return (
    <section>
        <h2 className="text-2xl font-bold mb-4 text-stone-700">Tasks</h2>
        <NewTask/>
        <p className="text-stone-800 my-4">This project dosent have any tasks yet.</p>
        <ul></ul>
    </section>
  )
}
