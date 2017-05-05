const initialState = {
	token: '',
	task: [
    {type: "mainquest", content: [
      {
        name: 'SomeText',
        type: 'paragraph',
        style: {color: 'black'},
        id: 45,
        // content:[
        //   {
        //     type: 'text',
        //     content: 'Repellendus possimus voluptas at reprehenderit optio consectetur doloremque officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.',
        //     name: 'Jesus',
        //     id: 451,
        //   },
        //   {
        //     type: 'text',
        //     content: ' officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.',
        //     name: 'Jesus',
        //     id: 452,
        //   },
        //   {
        //     type: 'text',
        //     id: 459,
        //     content: 'Repellendus possimus voluptas at reprehenderit optio consectetur doloremque officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.',
        //     name: 'Jesus'
        //   },
        // ]
        content: 'Repellendus possimus voluptas at reprehenderit optio consectetur doloremque officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.'+
        ' officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.'+ 'Repellendus possimus voluptas at reprehenderit optio consectetur doloremque officia nulla officiis, provident eos similique enim dolorum, ducimus, quaerat eveniet alias recusandae, molestiae.'
      }
    ]}
  ]
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