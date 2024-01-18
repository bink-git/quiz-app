import React, { useEffect, useState } from 'react';

function Game({ quest, onClickAnswer }) {
  const { incorrect_answers, correct_answer, question } = quest;
  console.log(incorrect_answers, correct_answer, question, 'data');

  const [locked, setLocked] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    // Reset state when a new question is received
    setLocked(false);
    setCorrectAnswer(null);
  }, [quest]);

  const checkAnswer = (e, answer) => {
    if (locked === false) {
      if (answer === correct_answer) {
        e.target.classList.add('correct');
        setLocked(true);
      } else {
        e.target.classList.add('incorrect');
        setLocked(true);
        setCorrectAnswer(correct_answer);
      }
    }
  };

  const answers = [quest.correct_answer].concat(quest.incorrect_answers).sort();

  return (
    <>
      <h1>{quest.question}</h1>
      <ul>
        {answers.map((answer) => (
          <li
            onClick={(e) => {
              checkAnswer(e, answer), onClickAnswer(answer);
            }}
            key={answer}
            style={{
              cursor: locked && 'not-allowed',
            }}
            className={`${locked && answer === correctAnswer ? 'correct' : ''}`}
          >
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
