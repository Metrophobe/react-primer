import React from 'react';
import './Validation.css';

const Validation = (props) => {
    
    //fields
    const minLength = 8;
    const msg = props.length >= minLength ? "Length sufficient...":"description too short";

    //render
    return (
        <div>
        <p>length is:{props.length}</p>
        <p>{msg}</p>
        </div> 
    )
}

export default Validation;