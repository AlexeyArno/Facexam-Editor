import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MainDecodeWorkDisplay from './decode/mainDecode.js'

export default class Description extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

		  getContent=()=>{
		  	return(this.props.content.map(function(item, index){
			  	return(
			  				<MainDecodeWorkDisplay key={index} item={item} delete={this.props.delete} token={this.props.token}
			  				index={index} theme={false} editSmth={this.editSmth} change={this.props.change} type='redactor'/>
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
		paddingTop: 20,
		paddingBottom: 20
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