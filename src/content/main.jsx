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
		    	
		    };
		  }

		  deleteElement=(id)=>{
		  	const {deleteElement} = this.props.content
		  	deleteElement(id)

		  }

		  change=(id, type, data)=>{
		  	const {changeElement} = this.props.content
		  	changeElement(id, type, data)
		  }

		  create=(type)=>{
		  	const {createElement} = this.props.content
		  	createElement(type)
		  }

render(){
	const {token} = this.props.user
	return(<div>
				<Header create={this.create}/>
				<WorkDisplay store={this.props.store} token={token} 
				delete={this.deleteElement} change={this.change}/>
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