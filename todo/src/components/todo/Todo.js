import React from 'react';
import { connect } from 'react-redux';

class Todo extends React.Component{

    render(){
       return(
        <div>
            <h1>Todo List</h1>
            <form>
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

export default connect(mapStateToProps, {/* actions */})(Todo)