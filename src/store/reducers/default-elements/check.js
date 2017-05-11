var Check = function(id){
	var element = {
			name: 'Новый check',
			type: 'check',
			id: id,
			size: 'full',
			content: [
				{type: 'box',
				content: 'Hello',
				id: Number(id+String(1))}
			]
	

	}
	return element
}

export default Check