import React, {useState} from 'react';
import Row from '../Row/Row';
import Header from '../Header/Header';
import './Grid.css';

const Grid = (props) => {

    let [header] = useState(Object.keys(props.data[0]));
    let [data,setData] = useState(props.data);
    let newRow = {}; 
    header.map(h => newRow[h] = '');

    let addRow = () => {
        newRow[header[0]] = data.length+1;
        let tmp = [...data,newRow];
        setData(tmp);
    }
    console.log('Grid  Rendering');
    return (
        
            <table className="Grid">
             
                <thead>
                    <tr>
                        {header.map( (h,i) => (<Header key={i} val={h}/>))}
                    </tr>
                </thead>
                <tbody>
                         {data.map( (r,i) => (<Row key={i} row={r} id={i} length={data.length} addRow={addRow}/>))}   
                 </tbody>
            </table>
    )
} 

export default React.memo(Grid);
