var NewId = function (place) {
	var max_id = 0
	place.map(function(item){
		(item.id>max_id)? (max_id = item.id):(max_id)
	})
	max_id++
	return(max_id)
}

export default NewId