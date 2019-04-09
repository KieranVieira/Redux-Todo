import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted, clearCompleted, deleteTask } from '../../actions';

class Todo extends React.Component{

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(e.target.task.value)
        e.target.task.value = ''
    }

    handleComplete = (e,todo) => {
        e.preventDefault()
        this.props.toggleCompleted(todo)
    }

    clearCompleted = (e) => {
        e.preventDefault();
        this.props.clearCompleted()
    }

    deleteTodo = (e,todo) => {
        e.preventDefault();
        this.props.deleteTask(todo)
    }

    render(){
       return(
        <div>
            <h1>Todo List</h1>
            {this.props.todos.map(todo => {
                return (
                <>
                    <h2 
                    onClick={e => this.handleComplete(e,todo)} 
                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.task}
                    </h2>
                    <button onClick={e => this.deleteTodo(e, todo)}>x</button>
                </>
                )
            })}
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" name="task" placeholder="Task Name" required/>
                <button type="submit">Add Todo</button>
                <button onClick={(e) => this.clearCompleted(e)}>Clear Completed</button>
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

export default connect(mapStateToProps, { addTodo, toggleCompleted, clearCompleted, deleteTask })(Todo)