import Examples from "./components/Examples.jsx";
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';


function App() {
  return (
    <> 
      <Header/> 
      <main>
        <CoreConcepts/>{/*movi o section daqui para o CoreConcept*/}
        <Examples/>
      </main>
    </>
  );
}

export default App;
