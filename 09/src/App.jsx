import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {
  const [stateProjects, setStateProjects] = useState({
    selectedProject: undefined,
    project: [],
  });
  const [isStart, setIsStart] = useState(false);

  function handleAddProject() {
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
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject={handleAddProject} />
      {stateProjects.selectedProject===null && <NewProject onCancel={handleCancelProject}/>}
      {stateProjects.selectedProject===undefined && <NoProjectSelected onAddProject={handleAddProject} />}
    </main>
  );
}

export default App;
