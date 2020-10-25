import React from 'react'
import './Header.css';


let Header = (props) => {   
    return (
        <th className="Header">
                {props.val}
         </th>
    );
}

export default Header;
