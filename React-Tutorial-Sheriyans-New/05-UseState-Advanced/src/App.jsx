import React, { useState } from 'react'

const App = () => {

  const [data, setData] = useState([10 , 20 , 30])
 
  const changeData = () => {
    const newData = [...data]
    newData.push(100)

    setData(newData)

  }

  return (
<>
<h1>{data}</h1>
<button onClick={changeData}>Change Data</button>
</>
  )
}

export default App




// import React, { useState } from 'react'

// const App = () => {

//   const [data, setData] = useState({name: 'Ayush', age: 20})
 
//   const changeData = () => {
//     const newData = {...data}
//     newData.name = 'Samad'
//     newData.age = 21

//     setData(newData)
//     // setData({name: 'Samad', age: 21})

//   }

//   return (
// <>
// <h1>Name: {data.name}</h1>
// <h1>Age: {data.age}</h1>
// <button onClick={changeData}>Change Data</button>
// </>
//   )
// }

// export default App

