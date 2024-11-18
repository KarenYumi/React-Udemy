import { useState, useRef } from "react";

export default function Player() {
  const input = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {                                 PARA NÃO TER TANTO COD A GNT COLOCOU O USEREF E MUDDAMOS E TIRAMOA ALGUMAS COISAS
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }
  function handleClick() {
    setEnteredPlayerName(input.current.value);
    input.current.value="";
  }

  return (
    <section id="player">
       <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2> {/* ?? É QUE NEM O enteredPlayerName ? enteredPlayerName : "unknown entity" , SÓ Q MAIS CURTO */}
      <p>
        <input
          ref={input}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
