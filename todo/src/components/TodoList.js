import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import Todo from './Todo';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };

    addTodo = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    };

    handleChanges = (event) => { 
        this.setState({ newTodo: event.target.value });
    };

    deleteTodo = (event) => {
        event.preventDefault();
        console.log('deleteTodo called');
    };

    render() {
        return (
            <div>
                <form className='input-section' onSubmit={this.addTodo}>
                    <input onChange={this.handleChanges} value={this.state.newTodo} placeholder='Add new item to list'/>
                    <button onClick={this.addTodo} className='add-button'>+</button>
                </form>
                {this.props.todos.map((todo, index) => (
                    <Todo todo={todo} deleteTodo={this.deleteTodo} key={index}/>
                ))}
            </div>
        );
    }
};

// Takes state and allows it to be used ass props within component
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

// Connect is a function and an HOC that takes in a component as an argument and returns a new component with state mapped to props for use within component. It also gets passed actions that get mapped to props for use within component
export default connect(
    mapStateToProps, 
    { addTodo }
)(TodoList);