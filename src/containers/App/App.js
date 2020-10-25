
import React,{Component} from 'react';
import Grid from '../../components/Grid/Grid';
import './App.css';

export default class App extends Component{

  //1 - Mount Cycle 
  //  constructor , getDerivedStateFromProps, render, componentDidMount
  //2 - Update Cycle
  // getDerivedStateFromProps, ShouldComponentUpdate, render, getSnapshotBeforeUpdate, coponentDidUpdate
  //3 - Destroy Cycle

  //1a -  This runs first ... you can set state here and props 
  constructor(props){
      super(props);
      this.state = {
        data :[
          {id:1 , name:"Harry",surname:"Stooge", age:'20'},
          {id:2 , name:"Mo",surname:"Stooge", age:'20'},
          {id:3 , name:"Larry",surname:"Stooge", age:'30'},
        ]
      }
  }
   
  //1b - here you also have state and props access.....
  //2a -  In case of an update this also runs .... updates occur after the component sucessfully mounted 
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromPRops",props);
    return state;
  }
  
  //2b - If Component is being UPDATED this OPTIONAL method runs before Render to determine if a Re-Render is needed 
  //ALTERNATIVELY YOU CAN EXTEND PureComponent instead of Component and shouldComponentUpdate is implicitly implemented by PureComponent
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component Update .... ');
    return true;
  }


  //1c - then everything renders ... and all the child components render as well
  //2c - May or may not happen depending on 2b then everything renders ... and all the child components render as well
  render = () => {
      console.log('render');
      return (
             <div className="App">
              <h1>{this.props.title}</h1>
              <Grid data={this.state.data} />
            </div>
          );
      }  

  //1d - Runs after an Initial RENDER Cycle
  componentDidMount() {
    //Cause Side effects here 
    console.log('Component Did Mount ');
  }

  //2d - Runs OPTIONALLY if you want to do 'last minute ops' to the dom ... 
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Get Snapshot Before Update')
    //can optionally return an object with last minute data... to componentdidupdate 
    return {message:'Snapshot!'};
  }
  
  //2e - Runs after an UPDATE cycle is complete 
  componentDidUpdate(prevProps, prevState,snapshot) {
      //Cause Side Effects here 
      console.log('Component Did Update ');
      //If state is updated here (it should be updated as a result of an async get request ... )
      console.log(snapshot);
  }

  //3 - Component will unmount ... needs to do some cleanup work .... 
  componentWillUnmount(){
    console.log('Component Will Unmount')
  }
  
  }






