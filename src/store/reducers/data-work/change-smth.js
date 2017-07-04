import  FindGlobal from './find-global.js'




var Change  = function(id, type, value, area, task){
	var finddata = FindGlobal(area, id, task)
	var element = (finddata.location == 'content') ? (task.content[area].content[finddata.element]) : (task.description[finddata.element])
	switch(type){
		 case 'size':
		 	element.size = value
		 	break;
		 case 'up':
		 	return Up(finddata.location, task, area, finddata.element)
		 case 'down':
		 	return Down(finddata.location, task, area, finddata.element)
		 case 'content':
		 	// console.log(element)
		 	// console.log(value)
		 	element.content = value
		 	break;
		 case 'few-fields':
		 	element.content = value.content
		 	element.answer = value.answer
		 case 'chooseBox':
		 	element.content = value.content
		 	element.answer = value.answer
		 	break;
		 case 'input':
		 	element.ext = value.extension
		 	element.answer = value.answer
		 	break;
		 case 'url':
			var globalID = getId()
          	element.url = 'http://127.0.0.1:9999'+'/task_img'+'/'+globalID+'/'+value
          	break;
	}	
	return(task)
}

export default Change



function getId(){
		  	var pathname = window.location.pathname
		  	pathname = Array.from(pathname)
		  	pathname = pathname.reverse()
			var id = []
			var stop = 0
			pathname.map(function (item, index) {
				if(item == '/'){
					stop++
				}
				if(stop== 0){
					id.push(item)
				}
			})
			id = id.reverse().join()
			// var id= 1 
			return id
		  }

function Up(location, task, area, element){
	if(element == 0){
		return task
	}else{
		var space = (location == 'content') ? (task.content[area].content) : (task.description)
		var p = space[element]
		space[element] = space[element-1]
		space[element-1] = p
	}
	return task
}

function Down(location, task, area, element){
	var space = (location == 'content') ? (task.content[area].content) : (task.description)
	if(area == space.length){
		return task
	}
	var p = space[element]
	space[element] = space[element+1]
	space[element+1] = p
	return task
}
