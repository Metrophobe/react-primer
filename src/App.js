import React, { useState } from "react";
import Person from "./Person/Person";

import "./App.css";

function App() {
  let [state, setState] = useState(true);
  let [visible, setVisible] = useState(false);

  let [persons, setPersons] = useState([
    { name: "Tom", age: 27 },
    { name: "Dick", age: 28 },
    { name: "Harry", age: 26 },
  ]);

  let showHideHandler = () => {
    setVisible(!visible);
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
        <button onClick={showHideHandler}> Toggle Persons</button>
        {visible
          ? persons.map((p) => (
              <div>
                <Person
                  click={switchHandler}
                  name={p.name}
                  age={p.age}
                ></Person>
              </div>
            ))
          : null}
      </header>
    </div>
  );
}

export default App;
