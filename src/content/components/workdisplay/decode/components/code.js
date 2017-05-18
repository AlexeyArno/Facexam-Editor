import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { docco } from 'react-syntax-highlighter/dist/styles';
import ActionCode from 'material-ui/svg-icons/action/code'
import SyntaxHighlighter from 'react-syntax-highlighter';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

import CodeRedactor from './redactor-instruments/coderedactor.js'


export default class CodeWorkWindow extends Component{


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
						      <MenuItem primaryText="Изменить ширину" onClick={()=>this.change('size')}/>
						      
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
	        	 	<CodeRedactor value={this.props.data} close={this.handle} change={this.change} />
	        	</Dialog>
	if(this.props.type == 'present'){
		dialog = <div/>
		elements =<div/>
	}
	return(<div style={{paddingRight: "20px"}} className={name}>
				{elements}
				{dialog}
				<Paper className="CodeShell">
				<AppBar title={this.props.data.language} 
					showMenuIconButton={false} 
					className="codeDescription"
					zDepth={2}
					style={{background: '#4285f4'}}
					/>
				<SyntaxHighlighter language='python' useInlineStyles={true} style={docco} className="Code">{this.props.data.content}</SyntaxHighlighter>
				</Paper>
			</div>

		

		   )

}



}