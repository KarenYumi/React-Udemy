
import { useRef } from "react";
export default function Answers({ answers, selectedAnswer , answerState , onSelect}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    //foi mudado de lugar pra ele funcionar apenas se ainda tiver questões
    shuffledAnswers.current = [...answers]; //criamos uma cópia para poder deixar aleatorio a ordem
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          cssClass = answerState;
        }

        return (
          //key usado para destruir e reconstruir um componente
          <li key={answer} className="answer" > 
            <button onClick={() => onSelect(answer)} className={cssClass} disabled={answerState !== ""}>
              {answer}
            </button>
          </li>
        )
      }
      )}
    </ul>
  );
}