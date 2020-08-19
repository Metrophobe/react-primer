import React, { useState } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  const [user, setUser] = useState("user");

  const setUserHandler = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="App">
      <h1>Revision 1</h1>
      <UserInput change={setUserHandler} user={user}></UserInput>
      <UserOutput one="one" user={user}>
        Children One
      </UserOutput>
      <UserOutput one="two" user={user}>
        Children Two
      </UserOutput>
      <UserOutput one="three" user={user}>
        Children Three
      </UserOutput>
      <UserOutput one="four" user={user}>
        Children Four
      </UserOutput>
      <UserOutput one="five" user={user}>
        Children Five
      </UserOutput>
      <UserOutput one="six" user={user}>
        Children Six
      </UserOutput>
    </div>
  );
}

export default App;
