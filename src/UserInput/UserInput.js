import React from "react";

import "./UserInput.css";

const UserInput = (props) => {
  return (
    <div className="UserInput">
      <h3>Please type in username</h3>
      <input onChange={props.change} type="text" value={props.user} />
    </div>
  );
};

export default UserInput;
