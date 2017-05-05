const initialState = {
	token: '',
	task: []
}

export default function user(state = initialState, action) {
  
   switch (action.type) {
      case 'SET_TOKEN':
      return { ...state, token: action.payload }
       case 'SET_TASK':
      return { ...state, task: action.payload }
    default:
      return state;
  }
}