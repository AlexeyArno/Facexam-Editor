import React, { Component } from 'react';
import Header from './components/header.jsx'
import ToolbarHeader from './components/toolbar.jsx'
import WorkDisplay from './components/workdisplay.jsx'
import { connect } from 'react-redux';
import * as content from '../store/actions/content.js'
import { bindActionCreators } from 'redux'


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

 class Main extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	nowPosition: 0
		    };
		  }

		  changePosit=(posit)=>{
		  	this.setState({
		  		nowPosition: posit
		  	})
		  }

		  deleteElement=(id)=>{
		  	const {deleteElement} = this.props.content
		  	deleteElement(id)

		  }

		  change=(id, type, data)=>{
		  	const {changeElement} = this.props.content
		  	var area = this.state.nowPosition
		  	changeElement(id, type, data, area)
		  }

		  create=(type)=>{
		  	const {createElement} = this.props.content
		  	var area = this.state.nowPosition
		  	createElement(type, area)
		  }

render(){
	const {token, count, task} = this.props.user
	return(<div>
				<Header create={this.create}/>
				<WorkDisplay store={this.props.store} token={token} changePosit={this.changePosit}
				delete={this.deleteElement} change={this.change} posit={this.state.nowPosition}/>
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