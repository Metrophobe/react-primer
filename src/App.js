import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

function App() {
  let [visible, setVisible] = useState(false);

  let [person, setPerson] = useState({
    name: "name",
    age: 0,
  });

  let [persons, setPersons] = useState([
    { name: "Tom", age: 27 },
    { name: "Dick", age: 28 },
    { name: "Harry", age: 26 },
  ]);

  let showHideHandler = () => {
    setVisible(!visible);
  };

  let addPersonHandler = () => {
    const newPersons = [...persons];
    newPersons.push(person);
    setPersons(newPersons);
  };

  let editPersonHandler = (e, personIndex) => {
    const newPersons = [...persons];
    persons[personIndex].name = e.target.value;
    setPersons(newPersons);
  };

  //This handler is firing instantly and is not waiting for click
  let deletePersonHandler = (personIndex) => {
    const newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    setPersons(newPersons);
  };

  //Adding new Person
  let setNewNameHandler = (e) => {
    setPerson({
      name: e.target.value,
      age: person.age,
    });
  };

  let setNewAgeHandler = (e) => {
    setPerson({
      name: person.name,
      age: e.target.value,
    });
  };

  //Pre-process before render

  let personsOutput = null;

  if (visible) {
    personsOutput = (
      <div>
        {persons.map((p, index) => (
          <Person
            key={index}
            id={index}
            click={showHideHandler}
            delete={deletePersonHandler}
            change={editPersonHandler}
            name={p.name}
            age={p.age}
          ></Person>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Introduction</h1>
        <h3> Persons Held in Collection {persons.length}</h3>
        <div>
          <label> Name </label>
          <input
            type="text"
            placeholder="name"
            onChange={setNewNameHandler}
            value={person.name}
          />
          <label> Age </label>
          <input
            type="text"
            placeholder="age"
            onChange={setNewAgeHandler}
            value={person.age}
          />
          &nbsp;
          <button onClick={addPersonHandler}>Add Person</button>
        </div>
        <br />
        <button onClick={showHideHandler}> Toggle Persons</button>
        {personsOutput}
      </header>
    </div>
  );
}

export default App;
