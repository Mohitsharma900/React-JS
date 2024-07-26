import { useState } from 'react' // hooks
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = ()=>{
    counter += 1   
    setCounter(counter)
    console.log(counter);
  }

  const reduceValue = ()=>{
    counter -= 1;
    setCounter(counter)
  }

  return (

    

    <>
       <h1>Chai aur React</h1>
       <h2>Counter Value : {counter}</h2>

       <button onClick={addValue}>Add Value {counter}</button>
       <br/>
       <br />
       <button onClick={reduceValue}>Reduce Value {counter}</button>
    </>
  )
}

export default App


// ui updation is controlled by react and thus hooks are used to update the value of variables visible on ui.. eg: useState..