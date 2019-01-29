import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleCompleted, clearCompleted } from '../../actions';

class Todo extends React.Component{

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(e.target.task.value)
        e.target.task.value = ''
    }

    handleComplete = (e,todo) => {
        e.preventDefault()
        console.log(todo)
        this.props.toggleCompleted(todo)
    }

    clearCompleted = (e) => {
        e.preventDefault();
        this.props.clearCompleted()
    }

    render(){
       return(
        <div>
            <h1>Todo List</h1>
            {this.props.todos.map(todo => {
                return <h2 onClick={e => this.handleComplete(e,todo)} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}> {todo.task} </h2>
            })}
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input type="text" name="task" placeholder="Task Name"/>
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

export default connect(mapStateToProps, { addTodo, toggleCompleted, clearCompleted })(Todo)