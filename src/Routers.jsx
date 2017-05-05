import React, { Component, PropTypes } from 'react';
import { Route, IndexRedirect, browserHistory, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
// import Application from './app.jsx'
import Main from './content/main.jsx'

import { bindActionCreators } from 'redux'

import * as userActions from './store/actions/userActions.js'


class RoutersApp extends Component{
	


	setTokenInRedux=(token)=>{
		const {setToken} = this.props.userActions
		setToken(token)
	}

	setTaskInRedux=(task)=>{
		const {setTask} = this.props.userActions
		setTask(task)
	}

	componentDidMount=()=>{
		// var token = this.getToken()
		// var subjects = this.getSubjects(token)
		
	}

	getToken=()=>{
		var xmlhttp = new XMLHttpRequest()
				xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_token', false);
				xmlhttp.send(null);  
				if(xmlhttp.status == 200) {
				var request = JSON.parse(xmlhttp.responseText).result
				// var request ='4f832a3b59577363977eb0c4f6d8f4593e1e7324'
				if (request){
					this.setTokenInRedux(request)
					return(request)
				}
				}
	}


	// getSubjects=(token)=>{
	// 			var xmlhttp = new XMLHttpRequest()
	// 			var body =  JSON.stringify({token: token})
	// 			xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_all_subjects', false);
	// 			xmlhttp.send(body);  
	// 			if(xmlhttp.status == 200) {
	// 			var request = JSON.parse(xmlhttp.responseText)
	// 			if (request){
	// 				this.setSubjectsInRedux(request)
	// 				return(request)
	// 			}
	// 			}
	// 	}

	render(){

				return(
				<Provider store={this.props.store}>	
					<Main/>
				</Provider>
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
    userActions: bindActionCreators(userActions, dispatch)
  }
}




export default connect(mapStateToProps,  mapDispatchToProps)(RoutersApp)