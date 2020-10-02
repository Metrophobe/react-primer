import React from "react";
import "./Char.css";


const Char = (props) => {   
  
  //render
  return (    
     <span onClick={props.delete} className='Char'>{props.char}</span>
  );
};

export default Char;
