import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted } from '../../actions';

class Todo extends React.Component{

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(e.target.task.value)
    }

    handleComplete = (e,todo) => {
        e.preventDefault()
        console.log('is clicked')
        this.props.toggleCompleted(todo)
    }

    render(){
       return(
        <div>
            <h1>Todo List</h1>
            {this.props.todos.map(todo => {
                return <h2 onClick={e => this.handleComplete(e,todo)}> {todo.task} </h2>
            })}
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" name="task" placeholder="Task Name"/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
       ) 
    }
    
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleCompleted })(Todo)