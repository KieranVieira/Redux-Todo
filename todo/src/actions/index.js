export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

export const addTodo = task => {
    return{
        type: ADD_TODO,
        payload: {
            task,
            id: Date.now(),
            completed: false
        }
    }
}

export const toggleCompleted = todo => {
    return{
        type: TOGGLE_COMPLETED,
        payload: {
            ...todo,
            completed: !todo.completed
        }
    }
}

export const clearCompleted = todo => {
    return{
        type: CLEAR_COMPLETED,
    }
}