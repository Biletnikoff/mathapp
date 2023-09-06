import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './components/Input.js';
import { generate, calculateWholeNumberArray, calculateMathType} from './utils/math';

function App() {
  const [ topNumberLength, setTopNumberLength ]= useState(0);
  const [ botNumberLength, setBotNumberLength ] = useState(0);
  const [ topNumber, setTopNumber] = useState(0);
  const [ botNumber, setBotNumber ] = useState(0);
  const [ equation, setEquation ] = useState('+');

  const numberCascade = (numberArray) => {
    let styleOffet = 0
    return (
      <section>
        {numberArray.map((numbers) => {
          styleOffet+=1
          return ( <h3 style={{marginLeft: (styleOffet - 1) * 10}}>
            {numbers}
          </h3>)
        })}
      </section>
    )
  }

  const setStateOnChange = setState => {
    return function(e) {
      setState(e.target.value);
    }
  }

  const handleOnClickGetRandomValues = () => {
    setBotNumber(generate(topNumberLength))
    setTopNumber(generate(botNumberLength))
  }

  const answer = calculateMathType(topNumber, botNumber, equation)
  const numberBreakdownArrayTop = calculateWholeNumberArray(topNumber)
  const numberBreakdownArrayBot = calculateWholeNumberArray(botNumber)
  return (
    <div className="App">
      <div className="cs-opacity-screen-app"/>
      <section className="container">
        <div className="cs-opacity-screen"/>
        (How many Digits long) Top Number
        <Input onChange={setStateOnChange(setTopNumberLength)}/>
        Bottom Number
        <Input onChange={setStateOnChange(setBotNumberLength)}/>
        <button onClick={handleOnClickGetRandomValues}>test</button>
        <h3>{topNumber}</h3>
       <span>{equation}</span>
        <h3>{botNumber}</h3>
      </section>
      <section className="container">
        <div className="cs-opacity-screen"/>
        Answer <h1>{answer}</h1>
        {numberCascade(numberBreakdownArrayTop)}
        {numberCascade(numberBreakdownArrayBot)}
      </section>
    </div>
  );
}



export default App;
