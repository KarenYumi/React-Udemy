import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers";

export default function Question({questionText, answers, onSelecAnswer, selectedAnswer, answerState, onSkipAnswer }){
  return (
    <div id="question">
        <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
        <h2>{questionText}</h2>
        <Answers
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelecAnswer}
        />
      </div>
  )
}