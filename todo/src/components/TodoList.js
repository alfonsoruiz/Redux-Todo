import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from '../actions';

import Todo from './Todo';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    handleChanges = (event) => { 
        this.setState({ newTodo: event.target.value });
    };

    addTodo = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    };

    toggleComplete = (event, index) => {
        this.props.toggleComplete(index);
    }

    deleteTodo = (event, index) => {
        this.props.deleteTodo(index);
    };

    render() {
        return (
            <div>
                <form className='input-section' onSubmit={this.addTodo}>
                    <input type='text' onChange={this.handleChanges} value={this.state.newTodo} placeholder='Add new item to list'/>
                    <button onClick={this.addTodo} className='add-button'>+</button>
                </form>
                {this.props.todos.map((todo, index) => (
                    <Todo todo={todo} toggleComplete={this.toggleComplete} index={index} deleteTodo={this.deleteTodo} key={index}/>
                ))}
            </div>
        );
    }
};

// Takes state and returns an object that maps state to props
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

// Connect is a function and an HOC that takes in a component as an argument and returns a new component with state mapped to props for use within component. It also gets passed actions that get mapped to props for use within component
export default connect(
    mapStateToProps, 
    { addTodo, toggleComplete, deleteTodo } //actions
)(TodoList); // component passed into connect