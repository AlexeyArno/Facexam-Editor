import React, { Component } from 'react';
import Header from './components/header.jsx'
import ToolbarHeader from './components/toolbar.jsx'
import WorkDisplay from './components/workdisplay.jsx'
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import * as content from '../store/actions/content.js'
import { bindActionCreators } from 'redux'


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

 class Main extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	nowPosition: 0,
		    	open: false,
		    	message: '',
		    	autoHideDuration: 4000,
		    };
		  }

		  changePosit=(posit)=>{
		  	this.setState({
		  		nowPosition: posit
		  	})
		  }

		   handleRequestClose = () => {
		    this.setState({
		      open: false,
		    });
		  };

		  check_on_valid=(type, task, area)=>{
		  	var message = ''
		  	var open = false
		  	var dislocationOfComponent = task[area].type
		  	switch(dislocationOfComponent){
		  		case 'mainquest':
		  			switch(type){
		  				case 'check':
		  					message = "'Флажок' нельзя содать в главном вопросе, "
		  					message+= "создайте задачу"
		  					open = true
		  					break;
		  				case 'radio':
		  					message = "'Переключатель' нельзя содать в главном вопросе, "
		  					message+= "создайте задачу"
		  					open = true
		  					break;
		  				default:
		  					return true
		  			}
		  			this.setState({
		  				message, open
		  			})
		  			return false
		  		default:
		  			return true
		  	}
		  }

		  deleteElement=(id)=>{
		  	const {deleteElement} = this.props.content
		  	var area = this.state.nowPosition
		  	deleteElement(id, area)

		  }

		  change=(id, type, data)=>{
		  	const {changeElement} = this.props.content
		  	var area = this.state.nowPosition
		  	changeElement(id, type, data, area)
		  }

		  create=(type)=>{
		  	const {task} = this.props.user
		  	const {createElement} = this.props.content
		  	var area = this.state.nowPosition
		  	if(this.check_on_valid(type, task, area)){
		  		createElement(type, area)
		  	}
		  }

render(){
	const {token, count, task} = this.props.user
	return(<div>
				<Header create={this.create}/>
				<WorkDisplay store={this.props.store} token={token} changePosit={this.changePosit}
				delete={this.deleteElement} change={this.change} posit={this.state.nowPosition}/>
				<Snackbar
		          open={this.state.open}
		          message={this.state.message}
		          autoHideDuration={this.state.autoHideDuration}
		          onRequestClose={this.handleRequestClose}
		        />
			</div>

		

		   )

}



}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}


function mapDispatchToProps(dispatch) {
  return {
    content: bindActionCreators(content, dispatch)
  }
}




export default connect(mapStateToProps,  mapDispatchToProps)(Main)