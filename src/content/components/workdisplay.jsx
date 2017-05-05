import React, { Component } from 'react';
import MainDisplay from './workdisplay/main.jsx'
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux'



class WorkDisplay extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

render(){
	var {task} = this.props.user
	return(
		<div>
		<MainDisplay task={task}/>
	</div>

		

		   )

}



}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}






export default connect(mapStateToProps)(WorkDisplay)