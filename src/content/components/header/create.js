import React, { Component } from 'react';
import ActionExtension from 'material-ui/svg-icons/action/extension'
import ActionPermMedia from 'material-ui/svg-icons/action/perm-media'
import ActionDescription from 'material-ui/svg-icons/action/description'
import ActionCode from 'material-ui/svg-icons/action/code'

export default class Create extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }



		  create=(type)=>{
		  		this.props.create(type)
		  }

render(){
	
	return(
			<div>
				<div className="shellIconCreate" onClick={()=>this.create('paragraph')}>
					<ActionDescription className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Абзац</div>
				</div>
				<div className="shellIconCreate" onClick={()=>this.create('img')}>
					<ActionPermMedia className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Изображение</div>
				</div>
				<div className="shellIconCreate" onClick={()=>this.create('code')}>
					<ActionCode className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Код</div>
				</div>
			</div>

		

		   )

}



}