import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui/svg-icons/navigation/close';


export default class ChooseModal extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	data: this.props.data,
		    };
		  }

		  save=()=>{
		    this.props.save('chooseBox',  this.state.data)
		  }


		 add=()=>{
		 	var data = this.state.data
		 	if(data.length == 0){
		 		data.push({type: 'box',
				content: 'Hello',
				id: this.props.id+'1'})
		 	}else{
		 		data.push({type: 'box',
				content: 'Hello',
				id: data[data.length-1].id+'1'})
		 	}
		 	this.setState({data})
		 }
		 delete=(index)=>{
		 	var data = this.state.data
		 	data.splice(index, 1)
		 	this.setState({data})
		 }


		  change=(event, index )=>{
		  	var data = this.state.data
		  	data[index].content = event.target.value
		 	this.setState({data})
		  	var element = document.getElementById('someChoose'+index)
		  	element.style.height = "5px";
    		element.style.height = (element.scrollHeight)+"px";
		  }

		  getContent=()=>{
		  	return(this.state.data.map(function(item, index){
		  			var closeStyle ={

		  			}
		  			return(<div key={index}>
			  				<div style={{display: 'inline-block', verticalAlign: 'top',
			  				 paddingTop: 11, opacity: 0.5, cursor:'pointer', marginRight: 10}}
			  				 onClick={()=>this.delete(index)}>
			        	 		<Close />
			        	 	</div>
		  					<div style={{display: 'inline-block', verticalAlign: 'top', paddingTop: 13}}>
		  						{index+'.'}
		  					</div>
			  				<textarea className="redactorText" cols="40"  id={'someChoose'+index} 
			  					 value={item.content} onChange={(event)=>this.change(event, index)}
			  					 style={{display: 'inline-block', width: '80%'}}/>

		  					</div>
		  				)

				  	}.bind(this))


		  		)
		  }

render(){
	var content = this.getContent()
	const style = {
	  margin: 12,

	};
	return(<div>
				<div>
					{content}
				</div>
				<div style={{textAlign: 'right',
				textAlign: "right",
			    position: "absolute",
			    bottom: 0,
			    right: 10}}>
					  <RaisedButton label="Добавить" style={style} onClick={()=>this.add()}/>
					   <RaisedButton label="Сохранить" onClick={()=>this.save()}  
					   backgroundColor="rgb(66, 133, 244)" labelColor='#fff' style={style}/>
				</div>
			</div>

		

		   )

}



}