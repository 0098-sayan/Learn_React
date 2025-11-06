import React from 'react'

const App = () => {

const person = { 
  name: "Alex" ,
  age:18
};

localStorage.setItem("user", person);

console.log(localStorage.getItem("user"));//Local Storage only supports storing and retrieving strings.

localStorage.setItem("user", JSON.stringify(person));

console.log(JSON.parse(localStorage.getItem("user"))); 

  

  return (
    <div>App</div>
  )
}

export default App