import SideBar from "./components/SideBar";
import NovoProjeto from "./components/NovoProjeto";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <NovoProjeto/>
      <SideBar/>
      
    </main>
  );
}

export default App;
