import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)

  const addValue = () => {
    
    if(counter < 20) {
      counter = counter + 1;
      setCounter(counter)
    }
    
    //console.log("button clicked" , counter)
  }

  const removeValue = () => {
    
    if(counter > 0) {
      counter = counter - 1;
      setCounter(counter)
    }

    //console.log("button clicked" , counter)
  }

  return (
    <>
    <h1>Chai aur react</h1>

    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value</button>
  
    <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
