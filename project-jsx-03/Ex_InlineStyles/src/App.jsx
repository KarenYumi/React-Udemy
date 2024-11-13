import React from "react";

function App() {
    const [cor, setCor]=React.useState();
    function colorRed (){
        setCor("activered");
    }
    function colorGreen(){
        setCor("activegreen")
    }
    
    return (
    <div id="app">
      <h1 style={{  color: cor === "activered" ? "red" : cor === "activegreen" ? "green" : "white" }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={colorGreen} >Yes</button>
        </li>
        <li>
          <button onClick={colorRed} >No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
