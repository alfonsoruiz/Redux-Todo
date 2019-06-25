import React from 'react';

const Todo = props => {
    return (
        <div className='Todo'>
            <p className={props.todo.complete ? 'complete' : ''} onClick={event => props.toggleComplete(event, props.index)}>
                {props.todo.task}
            </p>
            <button onClick={props.deleteTodo} className='delete-buttons'>X</button>
        </div>
    );
};

export default Todo;