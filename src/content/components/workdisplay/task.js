import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


export default class Task extends Component{

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
		margin:'100px 0px',
		minHeight: 100,
	}
	
	return(<div  style={container}>
			<Paper className='col-md-12 ' style={paper}>
				Task
			</Paper>
		</div>

		

		   )

}



}