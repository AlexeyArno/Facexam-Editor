import React, { Component, PropTypes } from 'react';
import { Route, IndexRedirect, browserHistory, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
// import Application from './app.jsx'
import Main from './content/main.jsx'

import { bindActionCreators } from 'redux'

import * as userActions from './store/actions/userActions.js'

import Processing from './process/decode-task.js'


class RoutersApp extends Component{
	




	setTaskInRedux=(task)=>{
		const {setTask} = this.props.userActions
		setTask(task)

	}

	componentWillMount=()=>{
		const {token} = this.props.user
		var task = this.getTask(token)
		
	}

	getId=()=>{
		  	var pathname = window.location.pathname
		  	pathname = Array.from(pathname)
		  	pathname = pathname.reverse()
			var id = []
			var stop = 0
			pathname.map(function (item, index) {
				if(item == '/'){
					stop++
				}
				if(stop== 0){
					id.push(item)
				}
			})
			id = id.reverse().join()
			// var id= 1 
			return id
		  }

	getTask=(token)=>{
		var xmlhttp = new XMLHttpRequest()
		// var pathname = window.location.pathname
		// var id= pathname.charAt(pathname.length-1)
		var id =this.getId()
		xmlhttp.open('POST', 'http://127.0.0.1:9999/api/author/get_task_content', false);
		var body =  JSON.stringify({token: token, id: id, code: '232323'})
		xmlhttp.send(body);  
		if(xmlhttp.status == 200) {
		var request = JSON.parse(xmlhttp.responseText)
		if (request.result != 'Error'){
			var task = Processing(JSON.parse(request.content), JSON.parse(request.description), JSON.parse(request.answers))
			this.setTaskInRedux(task)
			return(request)
		}
		}
}



	render(){
		var id =this.getId()

				return(
				<Provider store={this.props.store}>	
					<Main id={id}/>
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