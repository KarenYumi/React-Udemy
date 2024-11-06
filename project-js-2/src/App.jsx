import {useState} from 'react';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic ] = useState('Please click a button'); //TEM que ser usada aqui no top function (Hook function)

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header></Header> 
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            <CoreConcept 
            title="Components" 
            description='The core UI building block - compose the user interface by combining multiple components.'
            image ={componentsImg}
            />
            <CoreConcept
            title={CORE_CONCEPTS[1].title} 
            description={CORE_CONCEPTS[1].description} 
            image ={CORE_CONCEPTS[1].image} 
            />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        <br/>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
