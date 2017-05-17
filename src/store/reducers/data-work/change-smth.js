import  FindGlobal from './find-global.js'


var Change  = function(id, type, value, area, task){
	var finddata = FindGlobal(area, id, task)
	var element = (finddata.location == 'content') ? (task.content[area].content[finddata.element]) : (task.description[finddata.element])
	switch(type){
		 case 'size':
		 	element.size = value
		 	break;
		 case 'content':
		 	element.content = value
		 	break;
		 case 'chooseBox':
		 	element.content = value.content
		 	element.answer = value.answer
		 	break;
		 case 'input':
		 	element.ext = value.extension
		 	element.answer = value.answer
		 	break;
		 case 'url':
			var globalID = '/9'
          	element.url = 'http://127.0.0.1:9999/'+'task_img'+globalID+'/'+value
          	break;
	}	
	return(task)
}

export default Change


// switch(chnagedata[1]){
//         case 'size':
//           con[pos.first].content[pos.second].size = chnagedata[2]
//           break;
//         case 'content':
//           con[pos.first].content[pos.second].content = chnagedata[2]
//               break;
//         case 'chooseBox':
//           con[pos.first].content[pos.second].content = chnagedata[2][0]
//           con[pos.first].content[pos.second].answer = chnagedata[2][1]
//          case 'input':
//             con[pos.first].content[pos.second].ext = chnagedata[2][0]
//             con[pos.first].content[pos.second].answer = chnagedata[2][1]
//               break;
//         case 'url':
//             var globalID = '/9'
//            con[pos.first].content[pos.second].url = 'http://127.0.0.1:9999/'+'task_img'+globalID+'/'+chnagedata[2]
//            break;
//         case 'content_list':
//             var li_position = search_li(chnagedata[2][0],  con[pos.first].content[pos.second])
//              con[pos.first].content[pos.second].content[li_position].content = chnagedata[2][1]
//               break;
//         case 'new_list_item':
//             var newID = Number(String(id)+getMax_ID(con[pos.first].content[pos.second].content))
//             var item = {type: 'text',
//                           content: 'Hello',
//                           id:newID} 
//             con[pos.first].content[pos.second].content.push(item)
//               break;
             
//       }