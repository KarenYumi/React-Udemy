import SideBar from "./components/SideBar";
import NovoProjeto from "./components/NovoProjeto";
import NenhumItemSelecionado from "./components/NenhumItemSelecionado";
import { useState } from "react";
import SelectedItem from "./components/SelectedItem";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId //se encontrar o id ele retorna falso e derruba o id (deleta)
      ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }
  const selectedProject = projectsState.projects.find(project => project.id=== projectsState.selectedProjectId);

  let content  = <SelectedItem project={selectedProject} onDelete={handleDeleteProject}/>;

  if (projectsState.selectedProjectId === null) {
    content = <NovoProjeto onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NenhumItemSelecionado onStartAddProject={handleStartAddProject} />;
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      {content}
      <SideBar
       onStartAddProject={handleStartAddProject} 
      projects={projectsState.projects}
      onSelectedProject={handleSelectProject}
      />

    </main>
  );
}

export default App;
