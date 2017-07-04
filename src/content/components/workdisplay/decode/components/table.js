import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import TableRedactor from './redactor-instruments/table.js'

export default class Table extends Component{
constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    	// content: this.props.data.content
		    	table: [],
		    	ids: []
		    };
		}


		 handle = () => {
		    this.setState({open: !this.state.open});
		  };

		deleteElemente=()=>{
		  	this.props.delete(this.props.data.id)
		  }

		change=(type, data)=>{
			var data = data
		  	if(type == 'size'){
		  		data = "half"
		  		if(this.props.data.size == 'half'){
		  			data= 'full'
		  		}
		  	}
		  	var id =this.props.data.id
		  	this.props.change(id, type, data)

		}	

		componentDidMount=()=>{
			// this.state.ids.map(function(item, index){
			// 	this.update(item)
			// }.bind(this))
		}



		update=(id)=>{
			var element = document.getElementById(id)
			// this.setState({
			element.style.height = "5px";
    		element.style.height = (element.scrollHeight)+"px";
		}

		componentWillMount=()=>{
			// var data = this.getTable(this.props.data.content)
			// this.setState({
			// 	table: data.table,
			// 	ids: data.ids
			// })
		}


		changeData=(event,id, index1, index2)=>{
			// console.log(event.target.value)
			var content = this.props.data.content
			// if (place=='head'){
			// 	content.head[index1] = event.target.value
			// }else{
				content[index1][index2] = event.target.value
			// }
			// console.log(item)

			this.change('content', content)
			this.update(id)
			// 	content
			// })
		}


		getTable=(data)=>{
			const style={
				verticalAlign: 'top',
				border: "1px solid black",
				paddingRight: 5
			}
			var ids=[]
			var body = data.map(function(item, index){
				var row = item.map(function(item1, index1){
					var id = this.props.data.id+'head'+index+index1
					ids.push(id)
					return <td key={index+index1} style={style}>
									<textarea value={item1} className="redactorText" style={{width: "95%"}}
									onChange={(e)=>this.changeData(e,id, index, index1)}
								 id={id}/>
							</td>
				}.bind(this)) 
				return <tr key={index}>{row}</tr>
			}.bind(this))
			var table = <table style={{width: "100%", borderCollapse: "collapse"}}>
						 <tbody >
							  {body}
							 </tbody>
					</table> 
			return {table, ids}
		}
	

	render(){
		var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
		const closeStyle={
			position: 'absolute',
			top: '15px',
			right: '20px'
		}
		var elements = <div className='pMenu'>
							<IconMenu
						      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
						      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						      targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    >
						      <MenuItem primaryText="Редактировать" onClick={()=>this.setState({open: true})}/>
						      <MenuItem primaryText="Изменить позицию" rightIcon={<ArrowDropRight />}
						       menuItems={[
							        <MenuItem primaryText="Вверх"  onClick={()=>this.change('up')}/>,
							        <MenuItem primaryText="Вниз" onClick={()=>this.change('down')}/>,
							      ]} 
						      />
						      <MenuItem primaryText="Изменить ширину" onClick={()=>this.change( 'size')}/>
						      <MenuItem primaryText="Удалить" onClick={()=>this.deleteElemente()}/>
						    </IconMenu>
						</div>

		var dialog =  <Dialog
				          title="Изменение"
				          titleStyle={{color: 'rgb(33, 150, 243)'}}
				          modal={true}
				          open={this.state.open}
				          onRequestClose={this.handle}
				        	>
				        	 	<IconButton onClick={()=>this.handle()} style={closeStyle}>
				        	 		<Close color='rgb(33, 150, 243)'/>
				        	 	</IconButton>
				        	 	<TableRedactor data={this.props.data.content} change={this.change} close={this.handle}/>
				        	</Dialog>
		if(this.props.type == 'present'){
			dialog = <div/>
			elements =<div/>
		}
		// console.log(this.props.data.content)
		var table = this.getTable(this.props.data.content)
		table = table.table
		return(<div className={name}>
					{dialog}
					{elements}
					{table}
				</div>




					)

	}



}