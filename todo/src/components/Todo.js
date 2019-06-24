import React from 'react';

const Todo = props => {
    return (
        <div className='Todo'>
            <p>{props.todo.task} = {props.todo.complete.toString()}</p>
            <button onClick={props.deleteTodo} className='delete-buttons'>X</button>
        </div>
    );
};

export default Todo;