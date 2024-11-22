import SideBar from "./components/SideBar";
import NovoProjeto from "./components/NovoProjeto";
import NenhumItemSelecionado from "./components/NenhumItemSelecionado";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  function handleStartAddProject(){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState =>{
      const newProject ={
        ...projectData,
        id: Math.random()
      };
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects, newProject]
      };
    });
  }


  let content;

  if (projectsState.selectedProjectId === null){
    content = <NovoProjeto onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NenhumItemSelecionado onStartAddProject={handleStartAddProject} />;
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      {content}
      <SideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      
    </main>
  );
}

export default App;
