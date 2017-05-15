import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MainDecodeWorkDisplay from './decode/mainDecode.js'
import ReactSwipe from 'react-swipe';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import AvPlayArrow from 'material-ui/svg-icons/av/play-arrow'


export default class Final extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	start: 0
		    };
		  }
		  next=()=>{
		    this.refs.reactSwipe12.next();
		  }

		  prev=()=>{
		    this.refs.reactSwipe12.prev();
		  }
		  slide=(i)=>{
		  	this.refs.reactSwipe12.slide(i);
		  }

		  getQuestions=(comp, key)=>{
		  	if(comp.content.length == 0){
		  		return(<div key={key}></div>)
		  	}
		  	var final = comp.content.map(function(item, index){
		  			return(<MainDecodeWorkDisplay  item={item} key={index} type={'present'}/>)
		  		})

		  	return(<div key={key}>{final}</div>)

		  }


		  getMainQuest=(comp, key)=>{
		  	if(comp.content.length == 0){
		  		return(<div key={key}></div>)
		  	}
		  	var final = comp.content.map(function(item, index){
		  			return(<MainDecodeWorkDisplay  item={item} key={index} type={'present'}/>)
		  		})
		  	return(<div key={key}>{final}</div>)

		  }


render(){
	const container ={
		maxWidth: 1100,
		margin: 'auto'
	}
	const paper = {
		maxWidth: 800,
		margin:'100px 0px',
		minHeight: 100,
		paddingTop: 20,
		paddingBottom: 20
	}
	var mainquest = []
	var questions = []
	var task = this.props.content
	task.map(function(item, index){
		  if(item.type == 'mainquest'){
		  		var now = this.getMainQuest(item, index)
		  		mainquest = now
		  	}else if(item.type == 'quest'){
		  		var now = this.getQuestions(item, index)
		  		questions.push(now)
		  	}
		}.bind(this))
	var buttons = <div style={{position: 'absolute', right: 20, zIndex: 99999, opacity: 0.5}}>   
						 <IconButton  style={{transform: "scale(-1, 1)"}} onClick={()=>this.prev()}>
						      <AvPlayArrow/>
						    </IconButton>
						    <IconButton onClick={()=>this.next()}>
						      <AvPlayArrow />
						    </IconButton>
						 </div>
	return(<div  style={container}>
			<Paper className='col-md-12 ' style={paper}>
					{mainquest}
					<hr style={{marginTop: 20}}/>
					{buttons}
					<ReactSwipe className="carousel" id='carousel234' ref="reactSwipe12"  key={questions.length}
		  					swipeOptions={{continuous: false, startSlide: this.state.start, speed: 600}} >
		                {questions}
		            </ReactSwipe>

			</Paper>
		</div>

		

		   )

}



}