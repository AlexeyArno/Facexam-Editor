import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as userActions from './store/actions/userActions.js'

// import Login from './content/login.js'
import RoutersApp from './Routers.jsx'
import CircularProgress from 'material-ui/CircularProgress';


class Application extends Component{

constructor(props) {
		    super(props);
		    var {token} = this.props.user
		    this.state = {
		    	token: token,
		    	pos: 0
		    };
		  }

	setTokenInRedux=(token)=>{
		const {setToken} = this.props.userActions
		setToken(token)
		this.setState({
			token: token,
			pos: 1
		})
	}



	getUserToken=()=>{
		var xmlhttp = new XMLHttpRequest()
				xmlhttp.open('POST', 'http://127.0.0.1:9999/api/user/get_token', false);
				xmlhttp.send(null);  
				if(xmlhttp.status == 200) {
				var request = JSON.parse(xmlhttp.responseText)
				// request = 'bdf4166ff70d65430aacd415b7a0faf3a6747040'
					if (!request.result){
						// this.setTokenInRedux(request)
						return request
					}
				}

	}

		  componentWillMount=()=>{
		  	// if(this.state.token==0){
		  		var user_token = this.getUserToken()
				var xmlhttp = new XMLHttpRequest()
				// var body = JSON.stringify({u_token: '334243299e793286712115ee8a581bf7368f8e78', code: '232323'})
				var body = JSON.stringify({token: user_token})
				xmlhttp.open('POST', 'http://127.0.0.1:9999/api/author/login', false);
				xmlhttp.send(body);  
				if(xmlhttp.status == 200) {
				var request = JSON.parse(xmlhttp.responseText)
				request = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWMiOiI1OGMzODczM2IzNDRhODI2MjA5OTVhYWUwMTEyYzUxZTZmN2Q4NWYzIiwiZXhwIjoxNDk5ODg2NDQ4fQ.sszYNyvQCLPFdeEwyVhue2h-AX6_OSvutb58c2LGOQ0"

					if (!request.result){
						this.setTokenInRedux(request)
					}
				}
		  	// }
		  }


render(){

	if(this.state.pos == 0){
		return <div style={{textAlign: 'center', marginTop: screen.height/2.3}}>
						<CircularProgress size={40} thickness={3} color='#4285f4'/>
				</div>
	}
	if(!this.state.token){
		window.location.pathname = '/login'
	}
	
	return(
		<div><RoutersApp store={this.props.store}/></div>
		

		  )

}



}

function mapStateToProps (state) {
  return {
    achiev: state.achiev,
    user: state.user
  }
}
function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}




export default connect(mapStateToProps,  mapDispatchToProps)(Application)