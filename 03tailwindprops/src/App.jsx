import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/cards'

function App() {
  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-xl mb-4'>
        Tailwind
      </h1>
      <Cards username="Aunty" btnText="Know more"/>
      <Cards username="AuntyReturns" />
    </>
  )
}

export default App
