import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [state,setstate]=useState(0)
  let increase=()=>{
    setstate(state+1)
  };
  let decrease=()=>{
    setstate(state-1)
  };
  let reset=()=>{
    setstate(state=0)
  };

  return (
    <>
    <h1>Counter app</h1>
    <div className='divv'>{state}</div>
     <button onClick={increase}>+</button>
     <button onClick={decrease}>-</button>
     <button onClick={reset}>0</button>
    </>
  )
}

export default App
