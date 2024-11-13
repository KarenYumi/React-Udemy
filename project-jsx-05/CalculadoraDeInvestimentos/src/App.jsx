import Header from "./components/Header.jsx";
import User from "./components/User.jsx";
import {useState} from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >=1;

  function changing(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,              //pega os vaores do etado atual e atualiza com o valor adicionado que foi
        [inputIdentifier]: +newValue,    // identificado por inputIdentifier com newValue
      };
    });
  }


  return (
    <>
      <Header />
      <main>
        <User userInput={userInput} onChangeInput={changing}/>
        {!inputIsValid && <p className="center">Por favor coloque um duration válido</p>}
        {inputIsValid && <Results input={userInput}/>}
      </main>
    </>
  )
}

export default App
