import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [stateProjects, setStateProjects] = useState({
    selectedProject: undefined,
    projects: [],
  });
  const [selectedProjects, setSelectedProjects] = useState(null);

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

  function handleSelectProject(projectId) {
    setStateProjects((prevState) => {
      setSelectedProjects(prevState.projects.find((project) => project.id === projectId));
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }

  console.log(stateProjects);
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleStartAddProject} projects={stateProjects.projects} onSelectProject={handleSelectProject} selectedProjectId={stateProjects.selectedProjectId} />
      {stateProjects.selectedProjectId === null && (
        <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
      )}
      {stateProjects.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handleStartAddProject} />
      )}
      {stateProjects.selectedProjectId !== null && stateProjects.selectedProjectId !== undefined && (
        <SelectedProject project={selectedProjects} />
      )}
    </main>
  );
}

export default App;
