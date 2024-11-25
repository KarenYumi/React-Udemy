import SideBar from "./components/SideBar";
import NovoProjeto from "./components/NovoProjeto";
import NenhumItemSelecionado from "./components/NenhumItemSelecionado";
import { useState } from "react";
import SelectedItem from "./components/SelectedItem";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    task: []
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const NewTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      };
      return {
        ...prevState,
        task: [NewTask, ...prevState.task]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        task: prevState.task.filter((task) => task.id !== id
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
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
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedItem project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      task= {projectsState.task}
      
    />
  );

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
        selectedProjectId={projectsState.selectedProjectId}
      />

    </main>
  );
}

export default App;
