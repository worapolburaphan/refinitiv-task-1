import React, {useEffect, useState} from 'react';
import './App.css';
import useInputChange from "./hooks/useInputChange";
import {isFibonacci, isPrime} from "./utils/math";

enum Method {
  IsPrime = 0,
  IsFibonacci = 1
}

function App() {
  const [result, setResult] = useState(false)
  const [number, handleChangeNumber] = useInputChange(0)
  const [selectedMethod, handleChangeMethod] = useInputChange(Method.IsPrime)

  useEffect(() => {
    switch(+selectedMethod) {
      case Method.IsPrime: {
        const result = isPrime(+number)
        console.log(result)
        setResult(result)
        break
      }
      case Method.IsFibonacci: {
        const result = isFibonacci(+number)
        console.log(result)
        setResult(result)
        break
      }
      default: break
    }
  }, [selectedMethod, number])

  return (
    <div className="app">
      <div className="container">
        <div className='sidebar'>
          <input type='number' onChange={handleChangeNumber} value={number} />
        </div>
        <div className='content'>
          <select value={selectedMethod} onChange={handleChangeMethod}>
            <option value={Method.IsPrime}>isPrime</option>
            <option value={Method.IsFibonacci}>isFibonacci</option>
          </select>
        </div>
        <div className='right-sidebar'>
          {String(result)}
        </div>
      </div>
    </div>
  );
}

export default App;
