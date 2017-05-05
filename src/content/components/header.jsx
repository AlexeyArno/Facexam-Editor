import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuElements from './header/menuElements.jsx'


export default class Header extends Component{

	  constructor(props) {
			    super(props);
			    this.state = {
			      value: 3,
			    };
			  }



			handleChange = (event, index, value) => this.setState({value});

render(){
	const titleStyle ={
		display: 'inline-block',
		verticalAlign: "sub"
	}

	const iconStyleRight ={
		display: 'inline-block'
	}
	const iconStyleLeft={
		    verticalAlign: "top",
		    marginTop: 13	}
	var element = <MenuElements/>
	
	return( 
	 <div>
		 <AppBar
		    title="Редактор"
		    style={{background: '#4285f4'}}
		    titleStyle={titleStyle}
		    iconElementRight={element}
		    iconStyleLeft={iconStyleLeft}
		    iconStyleRight={iconStyleRight}
		  />
	  </div>

		

		   )

}



}