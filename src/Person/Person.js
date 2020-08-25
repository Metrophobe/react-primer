import React from "react";

import "./Person.css";

//it seems like the onclick handler is not working here and is fired immediately (the one in the button)
const person = (props) => {
  return (
    <div className="Person" id={props.id}>
      <p onClick={props.click}>
        I am a Person named {props.name} and I am {props.age}
      </p>
      Type in Name{" "}
      <input
        type="text"
        onChange={(e) => props.change(e, props.id)}
        value={props.name}
      />
      <p> {props.children} </p>
      <button onClick={() => props.delete(props.id)}>Delete </button>
    </div>
  );
};

export default person;
