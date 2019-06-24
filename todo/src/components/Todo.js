import React from 'react';

const Todo = props => {
    return (
        <div className='Todo'>
            <p>{props.todo}</p>
            <button onClick={props.deleteTodo} className='delete-buttons'>X</button>
        </div>
    );
}

export default Todo;