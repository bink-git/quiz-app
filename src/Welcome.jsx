import React from 'react';

const Welcome = ({ onStart }) => {
  return (
    <div className="welcome">
      <p>Welcome</p>
      <button onClick={() => onStart()}>Start Game</button>
    </div>
  );
};

export default Welcome;
