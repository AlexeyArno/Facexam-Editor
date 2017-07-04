var Processing = function (content, description, answers) {

	var now_answer = 0	
	// console.log(content, answers)
	for (var i = 1; i<content.length;i++){
		// 1 not 0, because 0 place in content task is "mainquest" hasn't user input elements
		for(var t = 0; t<content[i].content.length;t++){
			// console.log(content[i].content[t])
			switch(content[i].content[t].type){
				case 'check':
		  		case 'field':
		  		case 'radio':
		  		case 'few-fields':
		  			content[i].content[t].answer = answers[now_answer++]
		  			// console.log('+1')
		  			break;
			}
		}
	}
	return({content: content, description: description})
}


export default Processing