import {} from '../actions';

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
        default:
            return state;
    }
}