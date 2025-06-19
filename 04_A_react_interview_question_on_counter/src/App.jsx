import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(11)

  function addValue() {
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
    setCount(prevCount => prevCount+1)
  }

  function removeValue() {
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
  }

  return (
    <>
      
      <h2>Counter value : {count}</h2>
      <button onClick={addValue}>Add value {count }</button>
      <br />
      <button onClick={removeValue}>remove value {count}</button>
      <p>footer : { count}</p>
    </>
  )
}

export default App
