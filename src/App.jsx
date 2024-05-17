import React, { useState } from 'react';
import "./Calculator.css"
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (

    <div className="calculator">
      <h2>React-Calculator</h2>
      <input className="display" type="text" value={input} placeholder='0' readOnly />
      <input className="display" type="text" value={result} readOnly />
      <div className="buttons">
        
        <button className='numb' onClick={() => handleClick('7')}>7</button>
        <button className='numb' onClick={() => handleClick('8')}>8</button>
        <button className='numb' onClick={() => handleClick('9')}>9</button>
        <button className='op' onClick={() => handleClick('+')}>+</button>
        <button className='numb' onClick={() => handleClick('4')}>4</button>
        <button className='numb' onClick={() => handleClick('5')}>5</button>
        <button className='numb' onClick={() => handleClick('6')}>6</button>
        <button className='op' onClick={() => handleClick('-')}>-</button>
        <button className='numb' onClick={() => handleClick('1')}>1</button>
        <button className='numb' onClick={() => handleClick('2')}>2</button>
        <button className='numb' onClick={() => handleClick('3')}>3</button>
        <button className='op' onClick={() => handleClick('*')}>*</button>
        <button className='numb' onClick={() => handleClick('0')}>0</button>
        <button className='op' onClick={() => handleClick('.')}>.</button>
        <button className='op' onClick={() => handleClick('=')}>=</button>
        <button className='op' onClick={() => handleClick('/')}>/</button>
        <button className='opc' onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
}

export default App;
