var Save = function (task, token){
	var answers = {}
	for(var i =1; i<task.content.length; i++){
		for(var t = 0; t<task.content[i].content.length;t++){
				switch(task.content[i].content[t].type){
					case 'check':
					case 'radio':
					case 'field':
						answers.i = task.content[i].content[t].answer
						delete task.content[i].content[t].answer
				}	
		}
	}
	task.answers = answers
	send(token, task)
}

export default Save

function send(token, data){
				var xmlhttp = new XMLHttpRequest()
				var body =  JSON.stringify({token: token, data: data, id: 2, code: '232323'})
				xmlhttp.open('POST', 'http://127.0.0.1:9999/api/author/save_task_content', false);
				xmlhttp.send(body);  
				if(xmlhttp.status == 200) {
				var request = JSON.parse(xmlhttp.responseText)
					if (request){
						return(request)
					}
				}
		}