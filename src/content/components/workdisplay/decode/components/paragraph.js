import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class ParagraphWorkWindow extends Component{
	constructor(props) {
		    super(props);
		    this.state = {
		    	data: this.props.data,
		    	redactor: false,
		    	width: 0,
		    	height: 0
		    };
		  }


		  change=(id)=>{
		  	if(id){
			  	var width = document.getElementById(id).offsetWidth+20
			  	var height =  document.getElementById(id).offsetHeight+20
		  		this.setState({
		  			redactor: !this.state.redactor,
		  			width,
		  			height
		  		})
		  	}else{
		  			this.setState({
		  			redactor: !this.state.redactor
		  		})
		  	}
		  	
		  }


		  save=(id)=>{
		  	var data =  document.getElementById(id).value
		  	this.setState({
		  			redactor: !this.state.redactor,
		  			data: data
		  		})
		  }


		editSmth=(index)=>{
		this.props.editSmth(index)
	}

	parsingText=(content)=>{
		var text = new Array;
		content.map(function(item, index){
			text.push(item.content)
		})
		return text
	}	  

render(){
				var content = this.state.data
				var theme = lightBaseTheme
				var opacity = 1
				if( this.props.theme){
					theme = darkBaseTheme
					opacity = 0.7
				}
				var style={color: theme.palette.textColor, opacity: opacity, margin: 10, cursor: 'pointer'}
				var id = 'content'+this.props.index
				var buttons ={
					margin: 5
				}
				if(this.state.redactor){
					return(
							<div style={{paddingRight: "20px"}}>
							<textarea className="redactorText" cols="40" rows="3" id={id} defaultValue={content}
							style={{width: this.state.width, height: this.state.height}}/><br/>
							 <div style={{float: "right"}}>
								<RaisedButton label="Сохранить" style={buttons} onClick={()=>this.save(id)} />	
								<RaisedButton label="Отмена" style={buttons} onClick={()=>this.change()} />	
							</div>						
							</div>
						)
				}
			return(
			<div style={{paddingRight: "20px"}}>
		
				<div className="word" id={id} style={style} onClick={()=>this.change(id)}>{content}</div>
				
			</div>
		   )

		


}



}