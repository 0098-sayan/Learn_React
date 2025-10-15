import React from 'react'

const App = () => {

  const btnclicked = () => {
    console.log("button clicked");
  }

  const inputType=(val)=>{
    console.log(val);
  }

  return (
    <div>
      <input onChange={(e)=>{
        inputType(e.target.value)
      }} id='inp' type="text" placeholder='Enter your Name'/>
      <button onClick={btnclicked} id='btn'>Submit</button>
    </div>
  )
}

export default App
