import Paragraph from './default-elements/paragraph.js'
import Img from './default-elements/img.js'
import Code from './default-elements/code.js'
import List from './default-elements/list.js'
import Check from './default-elements/check.js'
import Radio from './default-elements/radio.js'
import Textfield from './default-elements/textfield.js'


function search(id, task, area){
  var fposit = area
  var position = -1
  for(var i=0;i<task[fposit].content.length;i++){
        if(task[fposit].content[i].id ==  id){
          return [fposit,i]
          break;
        }
    }
  return false
}


function search_li(id, li){
  for(var i=0;i<li.content.length;i++){
        if(li.content[i].id ==  id){
          return i
          break;
        }
    }
  return false
}


function getMax_ID(task){
  var maxid = 0 
  for(var i =0 ; i<task.length; i++){
    if(task[i].id > maxid){
      maxid = task[i].id
    }
  }
  maxid++
  return(maxid)
}



function deleteelement(data, deletedata) {
    var task = data
    var id = deletedata[0]
    var area = deletedata[1]
    var content = []

    for(var i=0;i<task[area].content.length; i++){
      if(task[area].content[i].id != id){
        content.push(task[area].content[i])
      }
    }
    task[area].content = content


    return(task)
};


function changesmth( id, data , chnagedata) {
    var task = data
    var position = search(id, task, chnagedata[3])
    if(position){
      switch(chnagedata[1]){
        case 'size':
          task[position[0]].content[position[1]].size = chnagedata[2]
          break;
        case 'content':
          task[position[0]].content[position[1]].content = chnagedata[2]
              break;
        case 'chooseBox':
          task[position[0]].content[position[1]].content = chnagedata[2][0]
          task[position[0]].content[position[1]].answer = chnagedata[2][1]
         case 'input':
            task[position[0]].content[position[1]].ext = chnagedata[2][0]
            task[position[0]].content[position[1]].answer = chnagedata[2][1]
              break;
        case 'url':
            var globalID = '/9'
           task[position[0]].content[position[1]].url = 'http://127.0.0.1:9999/'+'task_img'+globalID+'/'+chnagedata[2]
           break;
        case 'content_list':
            var li_position = search_li(chnagedata[2][0],  task[position[0]].content[position[1]])
             task[position[0]].content[position[1]].content[li_position].content = chnagedata[2][1]
              break;
        case 'new_list_item':
            var newID = Number(String(id)+getMax_ID(task[position[0]].content[position[1]].content))
            var item = {type: 'text',
                          content: 'Hello',
                          id:newID} 
            task[position[0]].content[position[1]].content.push(item)
              break;
             
      }
    }
    return(task)
};

function create (type, data){
  var task = data
  var fposit = type[1]
  var maxid = getMax_ID(task[fposit].content)
  switch(type[0]){
    case 'paragraph':
      var newData = Paragraph(maxid)
      break;
    case 'img':
       var newData = Img(maxid)
      break;
    case 'code':
        var newData = Code(maxid)
        break;
    case 'list':
        var newData = List(maxid)
        break;
    case 'check':
        var newData = Check(maxid)
        break;
    case 'field':
        var newData = Textfield(maxid)
        break;
    case 'radio':
        var newData = Radio(maxid)
        break;
    case 'task':
        task.push({type: "quest", content: []})
        return(task)
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
    {type: "mainquest", content: []},
    {type: "quest", content: [
      {
      name: 'Новый input',
      type: 'field',
      id: 21,
      answer: 'kopa',
      size: 'full',
      ext: 'Н'
  }
  ]}
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