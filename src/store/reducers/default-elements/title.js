var Title = function(enterdata, data, maxId){
	for(var i=1;i<=enterdata[1]; i++){
		var element = {
			type: 'title',
			name: 'Заголовок '+i,
			id: maxId+i,
			content: 'Заголовок',
		}
		data.push(element)

	}
	return data
}

export default Title