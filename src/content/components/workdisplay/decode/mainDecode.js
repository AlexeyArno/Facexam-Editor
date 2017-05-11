import React, { Component } from 'react';

import ParagraphWorkWindow from './components/paragraph.js'
import TitlehWorkWindow from './components/title.js'
import ImageWorkWindow from './components/image.js'
import CodeWorkWindow from './components/code.js'
import TooltipWorkWindow from './components/tooltip.js'
import VideoWorkWindow from './components/video.js'
import FormulWorkWindow from './components/formul.js'
import ListWorkWindow from './components/list.js'

export default class MainDecodeWorkDisplay extends Component{

	


render(){
	var item = this.props.item
		switch(item.type){
			case "paragraph":
				return(<ParagraphWorkWindow  data={item} delete={this.props.delete} change={this.props.change}/>)
			case 'img':
				return(<ImageWorkWindow  data={item} delete={this.props.delete} change={this.props.change} token={this.props.token}/>)
			case 'code':
				return(<CodeWorkWindow  data={item} delete={this.props.delete} change={this.props.change}/>)
			case 'list':
				return(<ListWorkWindow  data={item} delete={this.props.delete} change={this.props.change}/>)
			default:
				return <div>Some failed!!!</div>
		}

}
}