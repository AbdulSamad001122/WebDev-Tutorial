import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")

  const submitHandler = (e)=> {
    e.preventDefault()
    console.log('Form Submitted : ' , name)
    setName("")
  }
  return (
    <div>
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=> {
          console.log(e.target.value)
          setName(e.target.value)
        }} />        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
