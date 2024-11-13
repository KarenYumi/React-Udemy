import { useState } from "react";

export default function User({onChangeInput, userInput}) {


  return (
    <section id="user-input">
      <div className="input-group" >
        <p>
          <label>Initial Investment</label>
          <input type="number"
            required
            value={userInput.initialInvestment} //10000 irá aparecer na tela
            onChange={(event) => onChangeInput("initialInvestment", event.target.value)} //event.target.value pega o valor atual no input 
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onChangeInput("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group" >
        <p>
          <label>Expected Return</label>
          <input type="number"
            required 
            value={userInput.expectedReturn}
            onChange={(event) => onChangeInput("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}