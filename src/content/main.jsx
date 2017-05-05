import React, { Component } from 'react';
import Header from './components/header.jsx'
import ToolbarHeader from './components/toolbar.jsx'
import WorkDisplay from './components/workdisplay.jsx'



var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


export default class Main extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	
	return(<div>
				<Header/>
				<WorkDisplay/>
			</div>

		

		   )

}



}