import React, { Component } from 'react';


export default class FormulRedactor extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	
		    };
		  }

		  componentDidMount=()=>{
		  	// INFO -> https://habrahabr.ru/post/38077/
		  	var Textarea = document.getElementById('formul-redactor'); 
			var Container = document.createElement("DIV");
			Textarea.parentNode.insertBefore(Container, Textarea); 
			Container.appendChild(Textarea);
			Textarea.style.display = 'none';
			var iframe = "<iframe style='width: 100%; height: 100%;' src=\"javascript: document.open(); document.domain='" +
 			document.domain + "'; document.close();\" frameborder='0'></iframe>";
 			Container.innerHTML =  iframe + Container.innerHTML;
			var Frame = Container.childNodes[0];
			var isIE = /*@cc_on!@*/false;
			var FrameDoc = isIE ? Frame.contentWindow.document : Frame.contentDocument;
			FrameDoc.open();
			FrameDoc.write('<html><head></head><body>'+ Textarea.value +'& nbsp;</body></html>');
			FrameDoc.close();
			FrameDoc.designMode = "on";
		  }




render(){
	
	return(<div>
				<textarea id='formul-redactor'/>
				<div style={{padding: 10, border: '1px solid black'}} >
					Include
				</div>
			</div>

		

		   )

}



}