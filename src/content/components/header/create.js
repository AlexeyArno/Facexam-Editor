import React, { Component } from 'react';
import ActionExtension from 'material-ui/svg-icons/action/extension'
import ActionPermMedia from 'material-ui/svg-icons/action/perm-media'
import ActionDescription from 'material-ui/svg-icons/action/description'
import ActionCode from 'material-ui/svg-icons/action/code'
import ActionList from 'material-ui/svg-icons/action/list'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box'
import ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked'
import EditorFormatBold from 'material-ui/svg-icons/editor/format-bold'
import EditorFunctions from 'material-ui/svg-icons/editor/functions'
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import EditorBorderAll from 'material-ui/svg-icons/editor/border-all'
import CommunicationClearAll from 'material-ui/svg-icons/communication/clear-all'

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
			<Subheader>Локальные элементы</Subheader>
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
				<div className="shellIconCreate" onClick={()=>this.create('list')}>
					<ActionList className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Список</div>
				</div>
				<div className="shellIconCreate" onClick={()=>this.create('table')}>
					<EditorBorderAll className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Таблица</div>
				</div>
				 <Divider style={{height: 2, background: 'rgba(0,0,0,1)'}}/>
				 <Subheader>Ответы пользователя</Subheader>
				<div className="shellIconCreate" onClick={()=>this.create('check')}>
					<ToggleCheckBox className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Флажок</div>
				</div>
				<div className="shellIconCreate" onClick={()=>this.create('radio')}>
					<ToggleRadioButtonChecked className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Переключа́тель</div>
				</div>
				<div className="shellIconCreate" onClick={()=>this.create('field')}>
					<EditorFormatBold className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Поле ввода</div>
				</div>
				<div className="shellIconCreate" onClick={()=>this.create('few-fields')}>
					<CommunicationClearAll className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Несколько полей ввода</div>
				</div>
				 <Divider style={{height: 2, background: 'rgba(0,0,0,1)'}}/>
				 <Subheader>Глобальные</Subheader>
				<div className="shellIconCreate" onClick={()=>this.create('task')}>
					<ActionAssignment className='iconCreate' color='rgba(0,0,0,0.4)'/>
					<div style={{color: 'rgba(0,0,0,0.7)'}}>Задание</div>
				</div>
			</div>

		

		   )

}



}