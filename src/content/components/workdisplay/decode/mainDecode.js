import React, { Component } from 'react';

import ParagraphWorkWindow from './components/paragraph.js'
import ImageWorkWindow from './components/image.js'
import CodeWorkWindow from './components/code.js'
import FormulWorkWindow from './components/formul.js'
import ListWorkWindow from './components/list.js'
import Check from './components/check.js'
import Radio from './components/radio.js'
import TextFieldAnswer from './components/textfield.js'

export default class MainDecodeWorkDisplay extends Component{

	


render(){
	var item = this.props.item
		switch(item.type){
			case "paragraph":
				return(<ParagraphWorkWindow  data={item} delete={this.props.delete} change={this.props.change} type={this.props.type}/>)
			case 'img':
				return(<ImageWorkWindow  data={item} delete={this.props.delete} change={this.props.change} token={this.props.token}  type={this.props.type}/>)
			case 'code':
				return(<CodeWorkWindow  data={item} delete={this.props.delete} change={this.props.change}  type={this.props.type}/>)
			case 'list':
				return(<ListWorkWindow  data={item} delete={this.props.delete} change={this.props.change}  type={this.props.type}/>)
			case 'check':
				return(<Check  data={item} delete={this.props.delete} change={this.props.change}  type={this.props.type}/>)
			case 'radio':
				return(<Radio  data={item} delete={this.props.delete} change={this.props.change}  type={this.props.type}/>)
			case 'field':
				return(<TextFieldAnswer  data={item} delete={this.props.delete} change={this.props.change}  type={this.props.type}/>)
			default:
				return <div>Some failed!!!</div>
		}

}
}