import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo todo={todo} />
            ))}
        </div>
    );
};

// Takes state and allows it to be used ass props within component
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

// Connect is an HOC that takes in a component as an argument and returns a new component with state mapped to props for use within component
export default connect(mapStateToProps, {})(TodoList);