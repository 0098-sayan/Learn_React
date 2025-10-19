import React, { useState } from "react";

const app = () => {
  const [user, setUser] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("from submitted by", user);

    setUser("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter Your Name"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default app;
