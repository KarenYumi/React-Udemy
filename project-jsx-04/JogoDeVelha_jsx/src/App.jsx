import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X");
    setGameTurns();
  }

  return (
  <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 01" symbol="X" isActive={activePlayer === "X"}/>
        <Player initialName="Player 02" symbol="O" isActive={activePlayer === "O"}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>
    LOG
  </main>
  );
}

export default App
