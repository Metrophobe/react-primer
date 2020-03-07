import React from 'react'; // core react
import ReactDOM from 'react-dom'; // dom manipulation react (web application)
import './index.css'; // import the css file 
import App from './components/App/App'; // then we import App as a module 
import * as serviceWorker from './ServiceWorkers/serviceWorker';

const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(<App/>,rootEl);
} 

//tap into webpack to check if the module spotted any changes
if(module.hot){
    module.hot.accept('./components/App/App',()=>{// load the app file... re import it and render it ... 
        setTimeout(render);
    })
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
