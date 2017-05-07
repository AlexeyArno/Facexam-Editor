import React, { Component } from 'react';
import Dropzone  from 'react-dropzone';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import FlatButton from 'material-ui/FlatButton';


export default class ImageSettings extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	load: false,
		  		files: []
		    };
		  }
		  onDrop=(acceptedFiles)=>{
		  	if(acceptedFiles.length == 0){
		  		this.setState({
		  			load: false,
		  			files: []
		  		})
		  		return 0
		  	}
		  	// this.props.setImageInRedux(acceptedFiles[0])
		  this.setState({
		  	load: true,
	        files: acceptedFiles
	      });	
		  }

		  getloadfiles=()=>{
		  	var file = this.state.files[0]
		  	var myfiles =  <img className='upload' src={file.preview} />
		  	return(myfiles)
		  }


render(){
	var files = this.state.files
	if(this.state.load){
		var images = this.getloadfiles()
		return(<Dropzone onDrop={this.onDrop} accept="image/png"> 
					{images}
				</Dropzone>  )
	}
	return(<div>
		
            <Dropzone onDrop={this.onDrop} accept="image/png" >
	            <ReactCSSTransitionGroup
						transitionName="example"
			               transitionAppear = {true} transitionAppearTimeout = {3000}
			               transitionEnter = {false} transitionLeave = {false}>
		            <div style={{textAlign: 'center',marginTop: 75 }}>
		            	<img src='cloud-computing.svg' style={{width: 50}}/>
		              <div >Кликни или перетащи PNG картинку</div>
		              </div>
	              </ReactCSSTransitionGroup>
            </Dropzone>

		           
			
            </div>
		   )


}



}