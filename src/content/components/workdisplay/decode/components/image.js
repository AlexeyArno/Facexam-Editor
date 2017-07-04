import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';


import ImageSettings from './redactor-instruments/image.js'



export default class ImageWorkWindow extends Component{
	
	constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    };
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
	

	render(){
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
				        	 	<ImageSettings token={this.props.token} change={this.change} close={this.handle} id={this.props.id}/>
				        	</Dialog>
		if(this.props.type == 'present'){
			dialog = <div/>
			elements =<div/>
		}
		console.log(this.props.data.url)
		return(<div className={name}>
					{dialog}
					{elements}
					<img src={this.props.data.url} style={{width: "100%", padding:10}}/>
				</div>




					)

	}



}