import {useState} from "react";

export default function Player({initialName, symbol}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function saving(){
    setIsEditing((editing)=> !editing); //para voltar ao edit depois de clicar no save
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if(isEditing){
    editablePlayerName = (
    <input type="text" required value={playerName} onChange={handleChange} />
  )
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={saving}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}