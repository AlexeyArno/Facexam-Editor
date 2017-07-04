import React, { Component } from 'react';
import Header from './components/header.jsx'
import WorkDisplay from './components/workdisplay.jsx'
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import * as content from '../store/actions/content.js'
import { bindActionCreators } from 'redux'
import IssueProcessing from './main-functions/issue-proccessing.js'
import Save from './main-functions/save.js'

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
		  	var answer = IssueProcessing(type, task, area)
		  	if(answer.pass){
		  		return true
		  	}else{
		  		this.setState({
			  		message: answer.message, 
			  		open: true
			  	})
			  	return false

		  	}
		  }

		  saveContent=()=>{
		  	const {task, token} = this.props.user
		  	Save(task, token)
		  	window.location.reload()
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
		  	console.log(type)
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
				<Header create={this.create} save={this.saveContent}/>
				<WorkDisplay store={this.props.store} token={token} changePosit={this.changePosit}
				delete={this.deleteElement} change={this.change} posit={this.state.nowPosition}
				save={this.saveContent} id={this.props.id}/>
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