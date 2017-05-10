import React, { Component } from 'react';
import MainDisplay from './workdisplay/main.jsx'
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import ActionDone from 'material-ui/svg-icons/action/done'
import ImageBrush from 'material-ui/svg-icons/image/brush'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ReactSwipe from 'react-swipe';
import Task from './workdisplay/task.js'

import { bindActionCreators } from 'redux'


class WorkDisplay extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	 selectedIndex: 0,
		    };
		  }

		   select = (index) => {
		  	this.props.changePosit(index)
		   	this.slide(index)
		   };

		next=()=>{
		    this.refs.reactSwipe.next();
		  }

		  prev=()=>{
		    this.refs.reactSwipe.prev();
		  }
		  slide=(i)=>{
		  	this.refs.reactSwipe.slide(i);
		  }


		  getBottomNavigation=()=>{
		  	var {task} = this.props.user
		  	return(
			  		task.map(function(item, index){
			  			if(item.type == 'mainquest'){
			  				return(	<BottomNavigationItem
							            label="Главный вопрос"
							            key={index}
							            icon={<ActionAssignment/>}
							            onTouchTap={() => this.select(index)}
							          />					)
			  			}else{
			  				return(	<BottomNavigationItem
							            label={index+' задача'}
							            key={index}
							            icon={<ImageBrush/>}
							            onTouchTap={() => this.select(index)}
							          />					)
			  			}
			  		}.bind(this))

		  		)
		  }

		  getContent=()=>{
		  	var {task} = this.props.user
		  	return(
			  		task.map(function(item, index){
			  			if(item.type == 'mainquest'){
			  				return(	 <div key={index}>
					                	<MainDisplay task={task[0]} delete={this.props.delete}
										change={this.props.change} token={this.props.token}/>
									</div>				)
			  			}else{
			  				return(	<div key={index}><Task/></div>)
			  			}
			  		}.bind(this))

		  		)
		  }




render(){
	const muiTheme = getMuiTheme({
	  bottomNavigation: {
	    selectedColor: '#4285f4',
	  },
	  appBar: {
	    height: 50,
	  },
	});
	var {task} = this.props.user
	var start = this.props.posit
	var bottomItems = this.getBottomNavigation()
	var content = this.getContent()
	var final_content = <div ><Task/></div>
	var fianl_bottom = <BottomNavigationItem
							            label="Конечный вид"
							            icon={<ActionDone/>}
							            onTouchTap={() => this.select(content.length)}
							          />
	return(
		<div>
			<ReactSwipe className="carousel" id='carousel' ref="reactSwipe"  key={content.length}
		  					swipeOptions={{continuous: false, startSlide: start,
		  					speed: 600}} >
                {content}
                {final_content}
            </ReactSwipe>
		 <MuiThemeProvider muiTheme={muiTheme}>
			<BottomNavigation selectedIndex={start} className='bottomNavigation'>
	          {bottomItems}
	          {fianl_bottom}
	        </BottomNavigation>
	        </MuiThemeProvider>
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