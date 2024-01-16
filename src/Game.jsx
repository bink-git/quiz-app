import React, { useState } from 'react';

function Game({ quest, onClickAnswer }) {
  const { incorrect_answers, correct_answer, question } = quest;
  console.log(incorrect_answers, correct_answer, question, 'data');

  const [isClicked, setIsClicked] = useState(false);

  const checkAnswer = (e, answer) => {
    if (answer === correct_answer) {
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('incorrect');
    }
  };

  const answers = [quest.correct_answer].concat(quest.incorrect_answers).sort();

  return (
    <>
      <h1>{quest.question}</h1>
      <ul>
        {answers.map((answer) => (
          <li
            // onClick={() => onClickAnswer(answer)}
            onClick={(e) => {
              checkAnswer(e, answer), onClickAnswer(answer);
            }}
            key={answer}
            // className={`${answer === correct_answer ? 'correct' : 'incorrect'}`}
          >
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
