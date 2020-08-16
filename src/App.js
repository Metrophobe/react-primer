import React from "react";
import Person from "./Person/Person";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Introduction</h1>
        <Person name="Peter Pan" age="29" hobby="racing"></Person>
        <Person name="Peter Borg" age="29">
          Hobby:Racing
        </Person>
        <Person name="Sam Right" age="29" />
        <Person name="Brian May" age="29" />
      </header>
    </div>
  );
}

export default App;
