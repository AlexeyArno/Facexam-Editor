import React, { Component } from 'react';
import Header from './components/header.jsx'
import ToolbarHeader from './components/toolbar.jsx'
import WorkDisplay from './components/workdisplay.jsx'
import { connect } from 'react-redux';
import * as userActions from '../store/actions/userActions.js'
import { bindActionCreators } from 'redux'


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

 class Main extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	
	return(<div>
				<Header/>
				<WorkDisplay store={this.props.store} />
			</div>

		

		   )

}



}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect( mapDispatchToProps)(Main)