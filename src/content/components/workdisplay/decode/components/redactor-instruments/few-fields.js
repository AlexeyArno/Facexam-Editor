import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class FewFieldsRedactor extends Component{

constructor(props) {
		    super(props);
		    // const data = this.props.data
		    const now =  JSON.parse(JSON.stringify(this.props.data))
		    this.state = {
		    	now
		    };
		  }

		  deleteEl=(index)=>{
		  	var data = this.state.now
		  	data.content.splice(index, 1)
		  	data.answer.splice(index, 1)
		  	this.setState({
		  		now: data
		  	})
		  }

		  save=()=>{
		  	this.props.change('few-fields', this.state.now)
		  	this.props.close()
		  }

		  addEl=()=>{
		  	var data = this.state.now
		  	data.content.push('')
		  	data.answer.push('')
		  	this.setState({
		  		now: data
		  	})
		  }

		  onChange=(type,index, value)=>{
		  	var data = this.state.now
		  	if(type == 'text'){
		  		data.content[index] = value
		  	}else{
		  		data.answer[index] = value
		  	}
		  	this.setState({
		  		now: data
		  	})
		  }


		  getInfo=(data)=>{
		  	const styles = {
				  underlineStyle: {
				    borderColor: '#4285f4',
				    opacity: 0.5
				  },
				   underlineStyle1: {
				    borderColor: '#4285f4',
				    opacity: 0.5
				  }
				};
		  	return data.content.map(function (item, index) {
		  		return <Paper style={{padding: 15, margin: 10}} key={index}>
		  					<div  style={{display: 'inline-block', marginLeft: 20}}>Текст:</div>
		  					<TextField
                             style={{display: 'inline-block', marginLeft: 10, width: 150}}
						      value={item} 
								underlineStyle ={styles.underlineStyle}
								underlineFocusStyle={styles.underlineStyle}
						      onChange={(e, v)=>this.onChange('text', index, v)}
						    />
		  					<div style={{display: 'inline-block', margin: 20}}>Ответ:</div>
		  					<TextField
                              style={{display: 'inline-block', marginLeft: 10, width: 150}}
						      value={data.answer[index]} 
								underlineStyle ={styles.underlineStyle}
								underlineFocusStyle={styles.underlineStyle}
						      onChange={(e, v)=>this.onChange('answer', index, v)}
						    />
						   	<IconButton onClick={()=>this.deleteEl(index)} style={{float: 'right'}}>
			        	 		<Close color='rgb(33, 150, 243)'/>
			        	 	</IconButton>
		  				</Paper>
		  	}.bind(this))
		  }

render(){
	var data = this.state.now
	var body = this.getInfo(data)
	return(
			<div>
				<div style={{maxHeight: 300, overflowY: 'auto'}}>
					{body}
				</div>
				<div style={{position: 'absolute', bottom: 5, width: "96%"}}>
					<FlatButton label="Добавить" labelStyle={{color: 'rgb(33, 150, 243)'}} onClick={this.addEl}/>
					<RaisedButton label="Сохранить"   backgroundColor='rgb(33, 150, 243)'
								  style={{float: 'right'}} labelColor="#fff" onClick={this.save}/>
				</div>
			</div>
		

		   )

}



}