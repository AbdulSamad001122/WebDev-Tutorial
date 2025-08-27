import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
     <Card username = "Abdul Samad" post='Software engineer'/>
     <Card />
     <Card />
    </>
  )
}

export default App
