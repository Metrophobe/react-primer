import React, {useState,useEffect} from 'react'
import './Cell.css';


let Cell = (props) => {

    
    let [editable,setEditable] = useState(false);
    let [cellValue,setCellValue] = useState(props.val);
    
    let startEdit = (e) => {
        setEditable(!editable);
    }

    let endEdit = (e) => {  
        
        switch(e.keyCode)
        {
            case 13:
            case 27:
                setEditable(false);
            break;
            case 9:
                //could do something here when tab is pressed;
                props.tab(props.id);
            break;
            default:
            break;
        } 
    } 

    let onBlurred = (e) =>{
        setEditable(false);
    }

    let fieldChange = (e) => {
        setCellValue(e.target.value);
    }
    let defaultTD = (<td className="Cell" onClick={startEdit}>{cellValue}</td>);
    let editableTD = (<td className="Cell"><input onChange={fieldChange} onKeyDown={endEdit} onBlur={onBlurred} autoFocus type='text' value={cellValue}/></td>);
    let component = defaultTD;    
    
    if(!editable)
    {
        component =  defaultTD;
    } else {
        component = editableTD;   
    }    

    //You can have as many UseEffect Hooks as you need.....
    useEffect(()=> {
        console.log('copmonent did mount ... or component did update');
     
    //if an EMPTY array is passed => it will run only for the FIRST TIME WHEN COMPONENT MOUNTED =>  NEVER AGAIN 
    //if NOTHING is passed => it will run ALWAYS after Every UPDATE => SO ALWAYS 
    //if , separated variables are passed => it will run ALWAYS after the specified variables UPDATE (only)  
    return () => {
        console.log('Clean up is perfoermed here ');
    }
    },[component]);

    console.log("Cell Rendering");
    return component;
}

//useful for optimizing functional components and helps avoiding unnecessary re-renders 
//use with caution (alongside ShouldComponentUpdate) .. if a component ALWAYS updates these would slow down your react app!
export default React.memo(Cell);
