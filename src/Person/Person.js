import React from "react";

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am a Person named {props.name} and I am {props.age}
      </p>
      Type in Name{" "}
      <input type="text" onChange={props.change} value={props.name} />
      <p> {props.children} </p>
    </div>
  );
};

export default person;
