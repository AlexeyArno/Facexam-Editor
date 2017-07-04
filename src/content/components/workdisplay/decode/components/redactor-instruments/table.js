import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

export default class TableRedactor extends Component{

constructor(props) {
		    super(props);
		    const data = this.props.data
		    const now = JSON.parse(JSON.stringify(this.props.data))
		    this.state = {
		    	width: 0,
		    	height: 0,
		    	data, now
		    };
		  }

		  save=()=>{
		  	this.props.change('content', this.state.now)
		  	this.props.close()
		  }

		  changeSlider=(v, type)=>{
		  	if(type == 'width'){
		  		var now = this.changeWidth(v)
		  		this.setState({
		  			width: v,
		  			now
		  		})
		  	}else{
		  		var now = this.changeHeight(v)
		  		this.setState({
		  			height: v, now
		  		})
		  	}
		  	
		  }
		  addEl=(count, data)=>{
		  	for(var i =0;i<count;i++){
		  		data.push([])
		  	}
		  	return data
		  }

		  deleteEl=(count, data)=>{
		  	data.splice(data.length-count-1, count)
		  	return data
		  }


		  controller=(type, count, data)=>{
		  	if(type == 'add'){
		  		data = this.addEl(count, data)
		  	}else{
		  		data = this.deleteEl(count, data)
		  	}
		  	return data
		  }


		  changeWidth=(newValue)=>{
		  	var data = this.state.now
		  	var type = ''
		  	var count = 0
		  	if(newValue>data[0].length){
		  		type = 'add'
		  		count = newValue-data[0].length
		  	}else if(newValue<data[0].length){
		  		type = 'delete'
		  		count = data[0].length-newValue
		  	}else{
		  		return data
		  	}
		  	for (var i =0; i<data.length;i++){
		  		this.controller(type, count, data[i])
		  	}
		  	return data
		  }


		  createRow=(count_els)=>{
		  	var row = []
		  	for (var i=0; i<count_els;i++){
		  		row.push([])
		  	}
		  	return row
		  }

		  changeHeight=(newValue)=>{
		  	var data = this.state.now
		  	var type = ''
		  	var count = 0
		  	if(newValue>data.length){
		  		// type = 'add'
		  		count = newValue-data.length
		  		var row = this.createRow(data[0].length)
		  		for (var i=0;i<count;i++){
		  			data.push(row)
		  		}
		  	}else if(newValue<data.length){
		  		// type = 'delete'
		  		count = data.length-newValue
		  		data.splice(data.length-count-1, count)
		  	}else{
		  		return data
		  	}
		  	return data
		  }


		  componentWillMount=()=>{
		  	var data = this.state.now
		  	data = this.getTable(data)
		  	this.setState({
		  		width: data.width,
		  		height: data.height
		  	})
		  }

		  getTable=(data)=>{
			const style={
				verticalAlign: 'top',
				border: "1px solid black",
				paddingRight: 5
			}
			var ids=[]
			var width = 0
			var height = 0
			var body = data.map(function(item, index){
				var row = item.map(function(item1, index1){
					width++
					var id = this.props.data.id+'headModal'+index+index1
					ids.push(id)
					return <td key={index+index1} style={style}>
									<div style={{width: 25, height: 25}}/>
							</td>
				}.bind(this)) 
				height++
				return <tr key={index}>{row}</tr>
			}.bind(this))
			width = width/height
			var table = <table style={{width: "45%", borderCollapse: "collapse"}}>
						 <tbody >
							  {body}
							 </tbody>
					</table> 
			return {table, width, height}
		}

render(){
	var data = this.state.now
	var table = this.getTable(data).table
	const muiTheme=getMuiTheme({
		  slider: {
		      handleSize: 15,
		      handleSizeDisabled: 10,
		      handleSizeActive: 15,
		  },
		});
	return(<div>

			<div style={{display: 'inline-block'}}>
				<div>Ширина: {this.state.width}</div>
				<div style={{display: 'inline-block', width: 150, margin: '0px 10px'}}>
		        	<hr style={{position: 'relative', top: 35}}/>
		        	<hr style={{position: 'relative', top: 32.5, border: '0.5px solid rgb(33, 150, 243)',
		        				opacity: 0.5, width: (this.state.width-1)*25+'%'}}/>
		        		
		        	 <MuiThemeProvider muiTheme={muiTheme}>
			          
			          		<Slider value={this.state.width} min={1} max={5} step={1}
			          	 		onChange={(e,v)=>this.changeSlider(v,'width')}/>

			           </MuiThemeProvider>
		          </div>
		       </div>
		       <div style={{display: 'inline-block'}}>
		          <div>Высота: {this.state.height}</div>
		          <div style={{display: 'inline-block', width: 150,  margin: '0px 10px'}}>
		        	<hr style={{position: 'relative', top: 35}}/>
		        	<hr style={{position: 'relative', top: 32.5, border: '0.5px solid rgb(33, 150, 243)',
		        				opacity: 0.5, width: (this.state.height-1)*25+'%'}}/>
		        		
		        	 <MuiThemeProvider muiTheme={muiTheme}>
			          
			          		<Slider value={this.state.height} min={1} max={5} step={1}
			          	 		onChange={(e,v)=>this.changeSlider(v,'height')}/>

			           </MuiThemeProvider>
		          </div>
		         </div>
				{table}
				  <RaisedButton label="Сохранить" style={{ float: 'right'}} onClick={this.save}/>
			</div>

		

		   )

}



}


// <textarea value={item1} className="redactorText" style={{width: "95%"}}
									// onChange={(e)=>this.changeData(e,id, index, index1)}
								 // id={id}/>