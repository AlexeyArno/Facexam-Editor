import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MainDecodeWorkDisplay from './decode/mainDecode.js'


export default class Task extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }


		  getContent=()=>{
		  	return(this.props.task.content.map(function(item, index){
			  	return(
			  				<MainDecodeWorkDisplay key={index} item={item} delete={this.props.delete} 
			  				token={this.props.token} index={index} theme={false} change={this.props.change}/>
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
		margin:'100px 0px',
		minHeight: 100,
	}
	var content = this.getContent()
	return(<div  style={container}>
			<Paper className='col-md-12 ' style={paper}>
				{content}
			</Paper>
		</div>

		

		   )

}



}