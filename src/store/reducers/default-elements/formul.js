var Formul = function(id){
		var element = {
			name: 'Новая формула',
			type: 'formul',
			id: id,
			style:{color: '#000'},
			size: 'full',
			// content = [{type: 'lim', x: "y", go: 5},{type:'summ'},{type: "num", content: 5}] = lim + 5
			//                                           										  x->5 
			content: []
	}
	return element
}

export default Formul