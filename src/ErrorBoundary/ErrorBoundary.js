import React, { Component } from 'react';
 
class ErrorBoundary extends Component {
  
    state = {
        error:false, 
        msg:""
    };

    componentDidCatch = (error,info) => {
        this.setState({error:true,msg:error});
    }

   render = () => {
    if(this.state.error){
        return (
            <div>
                <h1>{this.state.msg}</h1>
            </div>
        )
    }
    else return this.props.children;
}
}

export default ErrorBoundary;
