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


export default class CodeWorkWindow extends Component{


	constructor(props) {
		    super(props);
		    this.state = {
		    	open: false
		    };
		}

		deleteElemente=(id)=>{
		  	this.props.delete(id)
		  }

		change=(id, type)=>{
		  	var data = ''
		  	if(type = 'size'){
		  		data = "half"
		  		if(this.props.data.size == 'half'){
		  			data= 'full'
		  		}
		  	}
		  	this.props.change(id, type, data)
		}


render(){
	var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
	var elements = <div className='pMenu'>
							<IconMenu
						      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
						      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						      targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    >
						      <MenuItem primaryText="Изменить ширину" onClick={()=>this.change( this.props.data.id, 'size')}/>
						      <MenuItem primaryText="Удалить" onClick={()=>this.deleteElemente( this.props.data.id)}/>
						    </IconMenu>
						</div>

	return(<div style={{paddingRight: "20px"}} className={name}>
				{elements}
				<Paper className="CodeShell">
				<AppBar title='Пример' 
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