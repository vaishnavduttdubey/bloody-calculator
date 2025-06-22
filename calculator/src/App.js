import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    setInput(prev => (prev === '0' ? value : prev + value));
  };

  const clearInput = () => {
    setInput('0');
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <main>
      <h1 className='heading'>BLOODY CALCULATOR</h1>
      <div className='calculator'>
        <div className="screen">{input}</div>
        <div className="display">
          {[1,2,3,4,5,6,7,8,9,0].map((num) => (
            <button key={num} className="btn" onClick={() => handleClick(num.toString())}>
              {num}
            </button>
          ))}
          <button className="btn" onClick={() => handleClick('+')}>+</button>
          <button className="btn" onClick={() => handleClick('-')}>-</button>
          <button className="btn" onClick={() => handleClick('*')}>×</button>
          <button className="btn" onClick={() => handleClick('/')}>÷</button>
          <button className="btn" onClick={() => handleClick('%')}>%</button>
          <button className="btn" onClick={clearInput}>C</button>
          <button className="btn" onClick={calculate}>=</button>
        </div>
      </div>
    </main>
  );
};

export default App;
