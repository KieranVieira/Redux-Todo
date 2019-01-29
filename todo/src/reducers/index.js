import { ADD_TODO, TOGGLE_COMPLETED, CLEAR_COMPLETED, DELETE_TASK } from '../actions';

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
    console.log(action)
    switch(action.type) {
        case ADD_TODO:
            return { todos: [...state.todos, action.payload]}
        case TOGGLE_COMPLETED:
            return { todos: [...state.todos.map(todo => {
                if(todo.id !== action.payload.id){
                    return todo
                }else{
                    return action.payload
                }
            })]}
        case CLEAR_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return !todo.completed
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                todos: [...state.todos.filter(todo => {
                if(todo.id === action.payload.id){
                    return false
                }else{
                    return true
                }
            })]}
        default:
            return state;
    }
}