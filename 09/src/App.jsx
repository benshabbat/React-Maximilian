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
  function handleDeleteProject(projectId) {
    setStateProjects((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter((project) => project.id !== projectId),
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(projectId) {
    setStateProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  }
  const selctedProject = stateProjects.projects.find(project => project.id === stateProjects.selectedProjectId);
 

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
        <SelectedProject project={selctedProject} onDelete={handleDeleteProject} />
      )}
    </main>
  );
}

export default App;
