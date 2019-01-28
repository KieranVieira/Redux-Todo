import { ADD_TODO, TOGGLE_COMPLETED } from '../actions';

const initialState = {
    todos: [
        {
            task: 'do something',
            id: 2354324523564,
            completed: false
        }
    ]
}

export default (state = initialState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload]}
        case TOGGLE_COMPLETED:
            console.log('toggle completed triggered', action)
        default:
            return state;
    }
}