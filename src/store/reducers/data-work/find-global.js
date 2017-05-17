var FindGlobal = function(area, id, task){
	var ans_location = (area>=task.content.length) ? ('description'): ('content')
	var location = (area>=task.content.length) ? (task.description): (task.content[area].content)
	var ans_element = -1
	var element = false
	location.map(function(item, index){
		if(item.id == id){
			element = item
			ans_element = index
		}
	})

	return {location: ans_location, element: ans_element}
}

export default FindGlobal