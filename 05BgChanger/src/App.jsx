import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");


  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

      <div className="flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2 ">

        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2  rounded-3xl">

          <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "red"}} onClick={()=>setColor(`${event.target.style.backgroundColor}`)}>
            Red
          </button>

          <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "green"}} onClick={()=>setColor(`${event.target.style.backgroundColor}`)}>
            Green 
          </button>

          <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "blue"}} onClick={()=>setColor(`${event.target.style.backgroundColor}`)}>
            Blue
          </button>

          <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "chocolate"}} onClick={()=>setColor(`${event.target.style.backgroundColor}`)}>
            Chocolate
          </button>

          <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "purple"}} onClick={()=>setColor(`${event.target.style.backgroundColor}`)}>
            Purple
          </button>

          <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "orange"}} onClick={()=>setColor(`${event.target.style.backgroundColor}`)}>
            Orange
          </button>

          <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "darkgray"}} onClick={()=>setColor(`${event.target.style.backgroundColor}`)}>
            Gray
          </button>

          <button className="shadow-lg outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "darkgoldenrod"}} onClick={()=>setColor(`${event.target.style.backgroundColor}`)} >
            Gold
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App
