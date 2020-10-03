import React, { useState } from 'react';
import ErrorBounday from './ErrorBoundary/ErrorBoundary';

export default (props) => {

  const [red, setRed] = useState("");  
  const [green, setGreen] = useState("");
  const [orange, setOrange] = useState("");

  const colorHandler = (e) => {
    switch(e.target.id){
      case "red":
        red === "" ? setRed('red'):setRed("");
        break;
      case "orange":
        orange === "" ? setOrange('orange'):setOrange("");
        break;
      case "green":
        green === "" ? setGreen('green'):setGreen("");
        break;  
      default:
        break;
    }
  }
  
  if(Math.random()>0.7){
    throw new Error("Something's wrong");  
  }

  return( 
  <ErrorBounday>
  <div>
    <h1>{props.title}</h1>
    <p>Click on the buttons to change the state</p>
    <button autofocus id="red" className={red} onClick={colorHandler}>Red</button>
    <button id="orange" className={orange} onClick={colorHandler}>Orange</button>
    <button id="green" className={green} onClick={colorHandler}>Green</button>
  </div>
  </ErrorBounday>
  );
}


