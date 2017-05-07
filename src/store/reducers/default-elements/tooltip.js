var Tooltip = function(enterdata, data, maxId){
	for(var i=1;i<=enterdata[1]; i++){
		var element = {
			type: 'tooltip',
			name: 'Подсказка '+i,
			id: maxId+i,
			word: 'Подсказка',
			content: 'Элемент графического интерфейса, служит дополнительным средством обучения пользователя.'
		}
		data.push(element)

	}
	return data
}

export default Tooltip