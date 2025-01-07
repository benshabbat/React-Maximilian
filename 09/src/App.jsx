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
        selectedProject: null,
      };
    });
  }
  function handleCancelProject() {
    setStateProjects((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleAddProject(newProject) {
    setStateProjects((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  console.log(stateProjects)
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleStartAddProject} />
      {stateProjects.selectedProject===null && <NewProject onCancel={handleCancelProject} onAdd={handleAddProject}/>}
      {stateProjects.selectedProject===undefined && <NoProjectSelected onAddProject={handleStartAddProject} />}
    </main>
  );
}

export default App;
