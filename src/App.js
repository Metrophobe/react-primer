import React, { useState } from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

import "./App.css";


function App() {

//hooks
const [length, setLength] = useState(0);
const [text, setText] = useState('');

//event handlers
const textmon = (e) =>{
  setLength(e.target.value.length);
  setText(e.target.value);
}

const removeMe = (i) => {
  let tmp = text.split('');
  tmp.splice(i,1);
  setText(tmp.join(''));
}

//pre-render 
let characters = text.split('').map((c,i) => {
  return <Char delete={() => removeMe(i)} key={i} id={i} char={c}/>
});

//render
  return (
    <div>
      <h1>Revision 2</h1>
      <h2>Please enter some text </h2>
      <textarea id='text' onChange={textmon} value={text}></textarea>
      <br/>
      <h2>Validation</h2>
      <Validation length={length}></Validation>
      <h2>Characters</h2>
      {characters}
    </div>
    );
}

export default App;
