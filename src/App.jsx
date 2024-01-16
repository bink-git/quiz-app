import { useState, useEffect } from 'react';
import axios from 'axios';

import Result from './Result';
import Game from './Game';
import Welcome from './Welcome';

function App() {
  const [data, setData] = useState([]);
  const [step, setStep] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [start, setStart] = useState(true);

  const onClickAnswer = () => {
    setStep(step + 1);
  };

  const onStart = () => {
    setStart(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
        );
        console.log(res.data.results);
        setData(res.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const quest = data && data[step];
  console.log(quest);

  return (
    <div className="App">
      {start && <Welcome onStart={onStart} />}
      {!start && quest && (
        <>
          <div className="progress">
            <div style={{ width: '30%' }} className="progress__inner"></div>
            <p style={{ marginBottom: '30px' }}>
              {step + 1} / {data.length}
            </p>
          </div>
          <Game quest={quest} onClickAnswer={onClickAnswer} />
        </>
      )}

      {/* <Result /> */}
      {/* {data && data.map((item, index) => <p>{item.question}</p>)} */}
    </div>
  );
}

export default App;
