import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import FormulDecode from './redactor-instruments/formul/formul-decode.js'
import FormulRedactor from './redactor-instruments/formul-redactor.js'
export default class FormulWorkWindow extends Component{
	constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    };
		}


	editSmth=(index)=>{
		this.props.editSmth(index)
	}
	 handle = () => {
		    this.setState({open: !this.state.open});
		  };

		deleteElemente=()=>{
		  	this.props.delete(this.props.data.id)
		  }

		change=(type, data)=>{
			var data = data
		  	if(type == 'size'){
		  		data = "half"
		  		if(this.props.data.size == 'half'){
		  			data= 'full'
		  		}
		  	}
		  	var id =this.props.data.id
		  	this.props.change(id, type, data)
		}



		getFormul=()=>{
			return this.props.data.content.map(function(item, index){
				return <FormulDecode key={index} data={item}/>
			})
		}
render(){
	var text = this.props.data
	var index = this.props.index
	var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
		const closeStyle={
			position: 'absolute',
			top: '15px',
			right: '20px'
		}
	var elements = <div className='pMenu'>
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
						      <MenuItem primaryText="Изменить ширину" onClick={()=>this.change( 'size')}/>
						      <MenuItem primaryText="Удалить" onClick={()=>this.deleteElemente()}/>
						    </IconMenu>
						</div>

		var dialog =  <Dialog
				          title="Изменение"
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          modal={true}
				          open={this.state.open}
				          onRequestClose={this.handle}
				        	>
				        	 	<IconButton onClick={()=>this.handle()} style={closeStyle}>
				        	 		<Close color='rgb(33, 150, 243)'/>
				        	 	</IconButton>
				        	 	<FormulRedactor data={this.props.data}/>
				        	</Dialog>
	if(this.props.type == 'present'){
		dialog = <div/>
		elements =<div/>
	}
	var formul = this.getFormul()
	if (formul.length==0){
		formul = <div>Пустая формула</div>
	}
	return(<div className={name}>
			{dialog}
			{elements}
			{formul}
			</div>

		

		   )

}



}



				        	 	// <ImageSettings token={this.props.token} change={this.change} close={this.handle}/>
