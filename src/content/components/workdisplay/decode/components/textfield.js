import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {green500, red500} from 'material-ui/styles/colors';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import TextFieldModal from './redactor-instruments/text-filed-redactor.js'
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class TextFieldAnswer extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		  }
		  deleteElemente=()=>{
			var id = this.props.data.id
		  	this.props.delete(id)
		  }

		change=(type, data)=>{
			var id = this.props.data.id
			var data = data
		  	if(type =='size'){
		  		data = "half"
		  		if(this.props.data.size == 'half'){
		  			data= 'full'
		  		}
		  	}else{
		  		this.handle()
		  	}
		  	this.props.change(id, type, data)
		}
		 handle=()=>{
			this.setState({
				open: !this.state.open
			})
		}


render(){
		var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
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
	const closeStyle={
			position: 'absolute',
			top: '15px',
			right: '20px'
		}
	var dialog =  <Dialog
				          title="Изменение"
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          modal={true}
				          open={this.state.open}
				          onRequestClose={this.handle}
				          autoScrollBodyContent={true}
				          autoDetectWindowHeight={true}
				          bodyStyle={{minHeight: 400}}
				        	>
	        	 	<IconButton onClick={()=>this.handle()} style={closeStyle}>
	        	 		<Close color='rgb(33, 150, 243)'/>
	        	 	</IconButton>

	        	 	<TextFieldModal data={this.props.data} save={this.change} id={this.props.data.id}/>
	        	</Dialog>
	var menu = <div className='pMenu'>
							<IconMenu
						      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
						      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						      targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    >	
						    	<MenuItem primaryText="Редактировать" onClick={()=>this.setState({open: true})}/>
						    	<MenuItem primaryText="Изменить позицию" rightIcon={<ArrowDropRight />}
						       menuItems={[
							        <MenuItem primaryText="Вверх"  onClick={()=>this.change('up')}/>,
							        <MenuItem primaryText="Вниз" onClick={()=>this.change('down')}/>,
							      ]} 
						      />
						    	<MenuItem primaryText="Изменить ширину" onClick={()=>this.change('size')}/>
						    	<MenuItem primaryText="Удалить" onClick={()=>this.deleteElemente()}/>
						    </IconMenu>
						</div>
	if(this.props.type == 'present'){
		dialog = <div/>
		menu =<div/>
	}
	
	return(<div style={{paddingLeft: 20}} className={name}>
			{dialog}
			{menu}
			<div style={{marginRight: 10, display: 'inline-block'}}>Ответ:</div>
			<TextField
				name={this.props.data.id+'TextField'}
				style={{display: 'inline-block', maxWidth: 200}}
				underlineStyle ={styles.underlineStyle}
				underlineFocusStyle={styles.underlineStyle}
				 />
			<div style={{marginLeft: 10, display: 'inline-block'}}>{this.props.data.ext}</div>
			</div>

		

		   )

}



}