var Video = function(enterdata, data, maxId){
	for(var i=1;i<=enterdata[1]; i++){
		var element = {
			name: 'Новая видеозапись '+i,
			type: 'video',
			id: maxId+i,
			videoNumber: 'TMZi25Pq3T8',
			style:{width: "100%"}
		}
		data.push(element)

	}
	return data
}

export default Video