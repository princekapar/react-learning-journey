import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  let myObj = {
    uername: 'Prince',
    password:'prince9800'
  }

  return (
    <>
      <h1 className='bg-red-600 text-amber-300 p-4 rounded-2xl mb-4'>Tailwind css</h1>

      <Card username = 'superman' loginObj={myObj} />
      <Card username='superHeroin' />
      
    </>
  )
}

export default App
