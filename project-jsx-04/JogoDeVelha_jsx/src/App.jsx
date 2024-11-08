import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return <main>
    <div id="game-container">
      <ol id="players">
        <Player initialName="Player 01" symbol="X" />
        <Player initialName="Player 02" symbol="O" />
      </ol>
      <GameBoard/>
    </div>
    LOG
  </main>
}

export default App
