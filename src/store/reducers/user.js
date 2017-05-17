
import Change from './data-work/change-smth.js'
import Create from './data-work/create.js'
import Delete from './data-work/delete.js'


function search(id, task, area){
  var fposit = area
  var position = -1
  for(var i=0;i<task[fposit].content.length;i++){
        if(task[fposit].content[i].id ==  id){
          // return [fposit,i]
          return {first: fposit, second: i}
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
  for(var i =0 ; i<task.content.length; i++){
    if(task.content[i].id > maxid){
      maxid = task.content[i].id
    }
  }
  maxid++
  return(maxid)
}



function deleteelement(data, task) {
    var task = Delete(data.id, data.area, task)
    return(task)
};


function changesmth( data, task) {
    // payload: {id: id, type: type, value: data, area: area}
    var task = Change(data.id, data.type, data.value, data.area, task) 
    return(task)
};



function create (data, task){
  // payload: {type: type, area: area}
  var task = Create(data.type, data.area, task)
  return task
}

const initialState = {
	token: '',
 task: {
    content:  [
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
        ]},
      ],
    description: [

    ]
 }
}

export default function user(state = initialState, action) {
  
   switch (action.type) {
      case 'SET_TOKEN':
      return { ...state, token: action.payload }
       case 'DELETE':
        var task = deleteelement(action.payload, state.task)
        return { ...state, task: task}
        case 'CHANGE':
        var task = changesmth(action.payload, state.task)
        return { ...state, task: task}
        case 'CREATE':
        var task = create(action.payload, state.task)
        return { ...state, task: task}
    default:
      return state;
  }
}