import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const numIncrease = () => {
    setNum(num + 1);
  };
 const numDecrease = () => {
  if (num > 0) {
    setNum(num - 1);
  }
};


  return (
    <div>
      <h1>The Value is {num}</h1>
      <button onClick={numIncrease}>Increase</button>
      <button onClick={numDecrease}>Decrease</button>
    </div>
  );
};

export default App;
