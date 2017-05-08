import Paragraph from './default-elements/paragraph.js'
import Img from './default-elements/img.js'
import Code from './default-elements/code.js'


function search(id, task){
  var fposit = 0
  var position = -1
  for(var i=0;i<task[0].content.length;i++){
        if(task[fposit].content[i].id ==  id){
          return [fposit,i]
          break;
        }
    }
  return false
}



function deleteelement(data, id) {
    var task = data
 
    var content = []

    for(var i=0;i<task[0].content.length; i++){
      if(task[0].content[i].id != id){
        content.push(task[0].content[i])
      }
    }
    task[0].content = content


    return(task)
};


function changesmth( id, data , chnagedata) {
    var task = data
    var position = search(id, task)
    console.log(task[position[0]].content[position[1]])
    if(position){
      switch(chnagedata[1]){
        case 'size':
          task[position[0]].content[position[1]].size = chnagedata[2]
          break;
        case 'content':
          task[position[0]].content[position[1]].content = chnagedata[2]
        case 'url':
            var globalID = '/9'
           task[position[0]].content[position[1]].url = 'http://127.0.0.1:9999/'+'task_img'+globalID+'/'+chnagedata[2]
      }
    }
    return(task)
};

function create (type, data){
  var task = data
  var fposit = 0
  var maxid = 0 
  for(var i =0 ; i<task[0].content.length; i++){
    if(task[0].content[i].id > maxid){
      maxid = task[0].content[i].id
    }
  }
  maxid++
  switch(type){
    case 'paragraph':
      var newData = Paragraph(maxid)
      break;
    case 'img':
       var newData = Img(maxid)
      break;
    case 'code':
        var newData = Code(maxid)
        break;
    default:
     return task
     break;
  }

  task[fposit].content.push(newData)
  return task
}

const initialState = {
	token: '',
	task: [
    {type: "mainquest", content: []}
  ]
}

export default function user(state = initialState, action) {
  
   switch (action.type) {
      case 'SET_TOKEN':
      return { ...state, token: action.payload }
       case 'DELETE':
        var task = deleteelement(state.task, action.payload)
        return { ...state, task: task}
        case 'CHANGE':
        var task = changesmth(action.payload[0], state.task, action.payload)
        return { ...state, task: task}
        case 'CREATE':
        var task = create(action.payload, state.task)
        return { ...state, task: task}
    default:
      return state;
  }
}