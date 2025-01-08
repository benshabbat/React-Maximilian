export default function SelectedProject({ project }) {
    const formatDate = new Date(project.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        });
  return (
    <div>
      <header>
        <div>
          <h1 className="text-3xl font-bold text-stone-900">{project.title}</h1>
          <button className="text-stone-800 hover:text-stone-950">Edit</button>
          <button className="text-stone-800 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="text-stone-800">{project.description}</p>
        <p className="text-stone-800">{formatDate}</p>
      </header>
      Tasks
    </div>
  );
}
