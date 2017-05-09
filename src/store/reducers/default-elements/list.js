var List = function(id){
	var element = {
			name: 'Новый абзац ',
			type: 'list',
			typeList: 'holes',
			id: id,
			style:{color: '#000'},
			size: 'full',
			content: [
				{type: 'text',
				content: 'Hello',
				id: Number(id+String(1))}
			]
	

	}
	return element
}

export default List