import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [user, setUser] = useState({
    name: "Sayan",
    age: 20,
    place: "Barrackpore",
  });

  const numIncrease = () => {
    setNum(num + 1);
  };
  const numDecrease = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const ChangeUser = () => {
    const newUser = { ...user };
    newUser.name = "Samiran";
    newUser.place = "Gangasagar";
    newUser.age = 19;
    setUser(newUser);
  };

  return (
    <div>
      <h1>The Value is {num}</h1>
      <button onClick={numIncrease}>Increase</button>
      <button onClick={numDecrease}>Decrease</button>
      <div>
        <h1>
          My Name is {user.name} , age {user.age} and I am from {user.place}
        </h1>
        <button onClick={ChangeUser}>Change User</button>
      </div>
    </div>
  );
};

export default App;
