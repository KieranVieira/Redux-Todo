import { addTodo, toggleCompleted } from '../actions';

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
    switch(action.type) {
        case addTodo:
            console.log('add todo triggered', action)
        case toggleCompleted:
            console.log('toggle completed triggered', action)
        default:
            return state;
    }
}