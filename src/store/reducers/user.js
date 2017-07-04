
import Change from './data-work/change-smth.js'
import Create from './data-work/create.js'
import Delete from './data-work/delete.js'


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
        // {type: "quest", content: [
        //       {
        //         name: 'Новый input',
        //         type: 'field',
        //         id: 21,
        //         answer: 'kopa',
        //         size: 'full',
        //         ext: 'Н'
        //     }
        // ]},
      ],
    description: [

    ]
 }
}
export default function user(state = initialState, action) {
  
   switch (action.type) {
      case 'SET_TOKEN':
      return { ...state, token: action.payload }
      case 'SET_TASK':
      return { ...state, task: action.payload }
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