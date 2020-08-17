import React, { useState } from "react";
import Person from "./Person/Person";

import "./App.css";

function App() {
  let [state, setState] = useState(true);

  let [persons, setPersons] = useState([
    { name: "Tom", age: 27 },
    { name: "Dick", age: 28 },
    { name: "Harry", age: 26 },
  ]);

  let nameChangeHandler = (event) => {
    setPersons([
      { name: event.target.value, age: 27 },
      { name: "Dick", age: 28 },
      { name: "Harry", age: 26 },
    ]);
  };

  let switchHandler = () => {
    if (state) {
      setPersons([
        { name: "Jones", age: 27 },
        { name: "Dastardly", age: 28 },
        { name: "Potter", age: 26 },
      ]);
      setState(false);
    } else {
      setPersons([
        { name: "Tom", age: 27 },
        { name: "Dick", age: 28 },
        { name: "Harry", age: 26 },
      ]);
      setState(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Introduction</h1>
        <button onClick={switchHandler}> Switch Name</button>
        <Person
          click={switchHandler}
          name={persons[0].name}
          age={persons[0].age}
          change={nameChangeHandler}
        ></Person>
        <Person name={persons[1].name} age={persons[2].age}></Person>
        <Person name={persons[2].name} age={persons[2].age}></Person>
      </header>
    </div>
  );
}

export default App;
