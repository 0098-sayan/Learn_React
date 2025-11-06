import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    
    const response = await axios.get('https://picsum.photos/v2/list')

    setData(response.data)
    
    
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){

          return <h3 key={idx}>Hello, {elem.id} {elem.author} </h3>
        })}
      </div>
    </div>
  )
}

export default App
