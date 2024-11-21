import Form from './Form';
import React from "react";

export default function App() {
  const form = React.useRef();

  function handleRestart() {
    form.current.limpar();
  }


  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={form} />
    </div>
  );
}