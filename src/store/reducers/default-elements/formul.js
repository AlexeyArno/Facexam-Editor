var Formul = function(enterdata, data, maxId){
	for(var i=1;i<=enterdata[1]; i++){
		var element = {
				type: 'formul',
				name: 'Формула '+i,
				id: maxId+i,
				content: '',
		}
		data.push(element)

	}
	return data
}

export default Formul