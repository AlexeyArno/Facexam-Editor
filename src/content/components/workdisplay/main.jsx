import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TaskWorkWindow from './decode/task.js'


export default class MainDisplay extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

		  editSmth=(item)=>{
		  		console.log('Hello')
		  }


		  getContent=()=>{
		  	return(this.props.task.map(function(item, index){
			  	return(
			  				<TaskWorkWindow key={index} item={item} index={index} theme={false} editSmth={this.editSmth}/>
			  			)
			  	}.bind(this))
		  	)
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
	var content = this.getContent()
	return(<div  style={container}>
			<Paper className='col-md-12 ' style={paper}>
				{content}
				<hr/>
			</Paper>
		</div>
		

		   )

}



}