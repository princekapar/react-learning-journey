import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)


  const addValue = () => {
    // console.log("clicked", counter);
    //counter = counter + 1;
    if (counter == 20) {
      setCounter(counter = 20)
    } else {
       setCounter(counter + 1)
    }
   
  }


  const removeValue = () => {
    if (counter > 0) {
       setCounter(counter-1)
    } else {
      setCounter(counter = 0)
    }
   
  }

  return (
    <>
      <h1>Chai aur react</h1>

      <h2>Counter value: {counter }</h2>
      <button onClick={addValue}>Add Value {counter }</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: { counter}</p>
    </>
  )
}

export default App
