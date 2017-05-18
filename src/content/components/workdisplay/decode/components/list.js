import React, { Component } from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import IconButton from 'material-ui/IconButton';
import ContentCreate from 'material-ui/svg-icons/content/create'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import Close from 'material-ui/svg-icons/navigation/close';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';

export default class ListWorkWindow extends Component{
		constructor(props) {
		    super(props);
		    this.state = {
		    	open: false,
		    };
		}

		handleChange=(event, id)=>{
			this.props.change(this.props.data.id, 'content_list', [id, event.target.value])
			var element = document.getElementById(id)
			element.style.height = "5px";
    		element.style.height = (element.scrollHeight)+"px";
		}


	getItem=(item, index)=>{
		if(item.type == 'text'){
			if(this.props.type == 'present'){
				return(<li key={index} style={{lineHeight: 1.6}}>
						{item.content}
					</li>)
			}
			return(<li key={index} style={{lineHeight: 0}}>
						<textarea className="redactorTextLi" cols="40" rows='1' value={item.content}
						onChange={(event)=>this.handleChange(event, item.id)} id={item.id}/>
					</li>)
		}else{
			this.getItem(item.content)
		}
	}
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

render(){
	var name = 'col-md-12'
		if(this.props.data.size == 'half'){
			name = 'col-md-6'
		}
	var item = this.props.data
	var content = item.content.map(function(item, index){
		return(this.getItem(item, index))
	}.bind(this))
	var parent = <ol>{content}</ol>
	if(item.typeList == 'holes'){
		parent = <ul>{content}</ul>
	}
	var elements = <div className='pMenu'>
							<IconMenu
						      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
						      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
						      targetOrigin={{horizontal: 'left', vertical: 'top'}}
						    >
						      <MenuItem primaryText="Редактировать" onClick={()=>this.setState({open: true})}/>
						      <MenuItem primaryText="Добавить элемент" onClick={()=>this.change( 'new_list_item')}/>
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
	if(this.props.type == 'present'){
		elements =<div/>
	}
	
	return(<div style={{paddingRight: 20}} className={name}>
			{elements}
			{parent}
		</div>
)

}



}