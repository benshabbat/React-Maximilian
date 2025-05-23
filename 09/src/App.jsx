import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import SelectedProject from "./Components/SelectedProject";

function App() {
  const [stateProjects, setStateProjects] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
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
  function handleDeleteProject() {
    setStateProjects((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
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
  function handleAddTask(text) {
    const newTask = {
      text,
      projectId: stateProjects.selectedProjectId,
      id: Math.random(),
    };
    setStateProjects((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(idTask) {
    setStateProjects((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== idTask),
      };
    });
  }

  const selctedProject = stateProjects.projects.find(
    (project) => project.id === stateProjects.selectedProjectId
  );

  console.log(stateProjects);
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onAddProject={handleStartAddProject}
        projects={stateProjects.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={stateProjects.selectedProjectId}
      />
      {stateProjects.selectedProjectId === null && (
        <NewProject onCancel={handleCancelProject} onAdd={handleAddProject} />
      )}
      {stateProjects.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handleStartAddProject} />
      )}
      {stateProjects.selectedProjectId !== null &&
        stateProjects.selectedProjectId !== undefined && (
          <SelectedProject
            project={selctedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            tasks={stateProjects.tasks}
            onDeleteTask={handleDeleteTask}
            selectedProjectId={stateProjects.selectedProjectId}
          />
        )}
    </main>
  );
}

export default App;
