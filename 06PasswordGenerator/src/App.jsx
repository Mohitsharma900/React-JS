import { useState, useCallback, useEffect, useRef } from "react"
// import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [characterAllowed , setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordReff = useRef(null);
  // const PasswordGenerator

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordReff.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])
  
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "_@(){}$#!&*/-";

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
      
    }
    
    setPassword(pass);
  } , [length, numberAllowed, characterAllowed, setPassword])


  useEffect(()=>{
    PasswordGenerator()
  }, [length, numberAllowed, characterAllowed, setPassword])

  
  return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
    <h1 className="my-3 text-2xl text-center text-white">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
       type="text"
       value={password}
       className="outline-none w-full py-1 px-3"
       placeholder="Password"
       readOnly 
       ref={passwordReff}
       />
       <button className="bg-neutral-950 px-3 py-1 shrink-0 outline-none text-white text-center"
       onClick={copyPasswordToClipBoard}
       >Copy</button>
    </div>
    <div 
      className="flex text-sm gap-x-2"    
    >
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e)=>{setLength(e.target.value)}}

        />
        <label> Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked = {numberAllowed}
        id="numberInput"
        onChange={()=>{
          setNumberAllowed((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox" 
        id="charInput"
        defaultChecked = {characterAllowed}
        onChange={()=>{
          setCharacterAllowed((prev) => (!prev)) 
        }}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
  </div>
  )
}

export default App
