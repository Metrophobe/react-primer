import React from 'react';
import Cell from '../Cell/Cell';
import './Row.css'

function Row(props) {


    let tab = (id) => {
        if((id.row === props.length-1) && (id.column === Object.keys(props.row).length-1)){
            props.addRow();
        } 
    }
    console.log('Row Rendering');
    return (
        <tr className="Row">
            {Object.values(props.row).map( (v,i) => (<Cell tab={tab} key={i}  id={{row:props.id,column:i}} val={v}/>))}  
        </tr>
    )
}

export default React.memo(Row);

