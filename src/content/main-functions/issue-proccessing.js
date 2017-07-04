function proveInputs(dislocation, task, area){
	var bad = {message: 'Здесь нельзя создавать элементы ответа', open: true, pass: false}
	switch(dislocation){
		case 'describe':
  			return(bad)
  		case 'content':
  			if(task.content[area].type == 'mainquest'){
  				return (bad)
  			}else{
  				let is = false
  				task.content[area].content.map(function(item){
  					switch(item.type){
						case 'check':
						case 'radio':
						case 'field':
            case 'few-fields':
							is = true
					}
  				})
  				if(is){
  					bad.message = 'Здесь уже создан элемент ответа'
  					return(bad)
  				}else{
  					return({pass: true})
  				}
  			}
	}

}





var IssueProcessing = function (type, task, area) {
	var message = ''
  	var open = false
  	if(area>task.content.length){
  		if(type != 'task'){
  			message = 'Здесь нельзя создавать элементы'
  			open =true
  			return({message: message, open: true, pass: false})
  		}else{
  			return({pass: true})
  		}
  	}
  	var dislocationOfComponent = (area == task.content.length)?('describe'):('content')
  	switch(type){
  		case 'check':
  		case 'radio':
  		case 'field':
      case 'few-fields':
  			return proveInputs(dislocationOfComponent, task, area)
  		default:
  			return({pass: true})
  	}
}



export default IssueProcessing