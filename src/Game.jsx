function Game({ quest, onClickAnswer }) {
  console.log(quest);
  // const { incorrect_answers, correct_answer, question } = quest;

  const answers = [quest.correct_answer].concat(quest.incorrect_answers).sort();

  return (
    <>
      <h1>{quest.question}</h1>
      <ul>
        {answers.map((answer) => (
          <li onClick={onClickAnswer} key={answer}>
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
