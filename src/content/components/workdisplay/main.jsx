import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


export default class MainDisplay extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	
	const container ={
		maxWidth: 1100,
		margin: 'auto'
	}
	const paper = {
		maxWidth: 800,
		marginTop: 70
	}
	return(<div style={container}>
			<Paper style={paper}>
				MainDisplay
			</Paper>
		</div>
		

		   )

}



}