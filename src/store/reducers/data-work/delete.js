import  FindGlobal from './find-global.js'


var Delete = function(id, area, task) {
	var finddata = FindGlobal(area, id, task)
	var location = (finddata.location == 'content') ? (task.content[area].content) : (task.description)
	location.splice(finddata.element, 1)
	return(task)
}

export default Delete