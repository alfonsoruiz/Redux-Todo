// Action Type
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';

// Action Creator
export const addTodo = (todo) => {
    // Action
    return {
        type: 'ADD_TODO',
        payload: { task: todo, complete: false }
    };
};

export const toggleComplete = (index) => {
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    };
};

export const deleteTodo = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    };
};