import NewProject from "./Components/NewProject";
import NoprojectSelected from "./Components/NoprojectSelected";
import ProjectsSidebar from "./Components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar/>
      <NoprojectSelected/>
    </main>
  );
}

export default App;
