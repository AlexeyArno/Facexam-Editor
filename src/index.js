import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/create-store';
import RoutersApp from './Routers.jsx'
import './libs/grid12.css';
import './libs/circle.css';

import styles from './index.css';



const store = configureStore();

var Full = () =>{
	return(
 <div>
	 <MuiThemeProvider>
	 	<RoutersApp store={store}/>
	 </MuiThemeProvider>
 </div>)}
ReactDOM.render(
	<Full/>,
  document.getElementById('root')
);


