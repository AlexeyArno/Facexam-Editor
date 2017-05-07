var Task = function(enterdata, data, maxId){
	for(var i=1;i<=enterdata[1]; i++){
		var element = {
			name: 'Новое задание '+i,
			type: 'task',
			id: maxId+i,
			content:[
				{
						type: 'p',
						content: 'Вопрос',
						name: 'Вопрос',
						id: i,
				},
				{
						type: 'answer',
						answer: '23'
				},
				{
						type: 'p',
						id: i+1,
						content: 'Объяснение',
						name: 'Объяснение'
				},
			]
		}
		data.push(element)

	}
	return data
}

export default Task