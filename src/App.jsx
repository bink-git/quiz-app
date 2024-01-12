import { useState, useEffect } from 'react';

import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const res = axios.get(
      'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
    );

    console.log(res);
  }, []);

  return <></>;
}

export default App;
