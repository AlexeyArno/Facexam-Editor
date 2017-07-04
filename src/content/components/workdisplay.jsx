import React, { Component } from 'react';
import MainDisplay from './workdisplay/main.jsx'
import { connect } from 'react-redux';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import ActionAssignmentTurnedIn from 'material-ui/svg-icons/action/assignment-turned-in'
import ActionDone from 'material-ui/svg-icons/action/done'
import ImageBrush from 'material-ui/svg-icons/image/brush'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ReactSwipe from 'react-swipe';
import Task from './workdisplay/task.js'
import Final from './workdisplay/final.js'
import Description from './workdisplay/description.js'

import ButtonControll from './buttonControl.js'

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
		   save=()=>{
		   	this.props.save()
		   }

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
			  		task.content.map(function(item, index){
			  			if(item.type == 'mainquest'){
			  				return(	<BottomNavigationItem
							            label="Главный вопрос"
							            key={index}
							            icon={<ActionAssignment/>}
							            onTouchTap={() => this.select(index)}
							          />					)
			  			}else if(item.type == 'quest'){
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
			  		task.content.map(function(item, index){
			  			if(item.type == 'mainquest'){
			  				return(	 <div key={index}>
					                	<MainDisplay task={item} delete={this.props.delete} id={this.props.id}
										change={this.props.change} token={this.props.token}/>
									</div>				)
			  			}else if(item.type == 'quest'){
			  				return(	<div key={index}>
			  							<Task  task={item} delete={this.props.delete} id={this.props.id}
										change={this.props.change} token={this.props.token}/>
			  						</div>)
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
	var description_content= <div >
			  							<Description  content={task.description} delete={this.props.delete}
										change={this.props.change} token={this.props.token}/>
			  						</div>
	var description_button = <BottomNavigationItem
							            label={'Объяснение'}
							            icon={<ActionAssignmentTurnedIn/>}
							            onTouchTap={() => this.select(content.length)}
							          />		
	var final_content = <div ><Final content={task.content}/></div>
	var fianl_bottom = <BottomNavigationItem
							            label="Конечный вид"
							            icon={<ActionDone/>}
							            onTouchTap={() => this.select(content.length+1)}
							          />
	return(
		<div>
			<ReactSwipe className="carousel" id='carousel' ref="reactSwipe"  key={content.length}
		  					swipeOptions={{continuous: false, startSlide: start,
		  					speed: 600}} >
                {content}
                {description_content}
                {final_content}
            </ReactSwipe>
            <ButtonControll color="#4285f4" save={this.save}/>
		 <MuiThemeProvider muiTheme={muiTheme}>
			<BottomNavigation selectedIndex={start} className='bottomNavigation'>
	          {bottomItems}
	          {description_button}
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