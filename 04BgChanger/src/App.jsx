import { useState } from "react"

function App() {
  const body = document.querySelector('body');
  const changecl = (event) =>{
    console.log(event.target.classList[0]);
    body.style.backgroundColor = `${event.target.classList[0]}`
    console.log("Mohit");
  }
  return (
    <>
      <div className='bg-white rounded-2xl flex flex-row w-auto mx-16 my-5 absolute bottom-0'>
        <div className='#dc2626 text-white rounded-xl bg-red-600 m-2 p-2 w-40' onClick = {changecl}>Red</div>
        <div className='#16a34a text-white rounded-xl bg-green-600 m-2 p-2 w-40   ' onClick = {changecl}>Green</div>
        <div className='#2563eb text-white rounded-xl bg-blue-600 m-2 p-2 w-40   ' onClick = {changecl}>Blue</div>
        <div className='#c7b8ea text-white rounded-xl bg-lavender m-2 p-2 w-40   ' onClick = {changecl}>Lavendor</div>
        <div className='#ea580c text-white rounded-xl bg-orange-600 m-2 p-2 w-40   ' onClick = {changecl}>Orange</div>
        <div className='#d2c4b7 text-white rounded-xl bg-Mustard m-2 p-2 w-40   ' onClick = {changecl}>Mustard</div>
        <div className='#000000 text-white rounded-xl bg-black m-2 p-2 w-40   ' onClick = {changecl}>Black</div>
        <div className='#9333ea text-white rounded-xl bg-purple-600 m-2 p-2 w-40   ' onClick = {changecl}>Purple</div>
      </div>
    </>

    /**
     * The method I used above doesn't use any hooks and if you don't use hooks, what's the point of using react..
     */

    

    
  )
}

export default App
