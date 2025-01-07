import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {
  const [stateProjects, setStateProjects] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setStateProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleCancelProject() {
    setStateProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(project) {
    const newProject = { ...project, id: Math.random() };
    setStateProjects((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: newProject.id,
      };
    });
  }

  console.log(stateProjects);
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleStartAddProject} projects={stateProjects.projects} />
      {stateProjects.selectedProjectId === null && (
        <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
      )}
      {stateProjects.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handleStartAddProject} />
      )}
    </main>
  );
}

export default App;
