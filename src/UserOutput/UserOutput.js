import React from "react";

import "./UserOutput.css";

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <h1>
        Username <span>{props.user}</span>
      </h1>
      <p>
        This is the value typed in via prop one:
        <br /> {props.one}
      </p>
      <h6>{props.children}</h6>
    </div>
  );
};

export default UserOutput;
