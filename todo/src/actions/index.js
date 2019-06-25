// Action Type
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

// Action Creator
export const addTodo = (todo) => {
    // Action
    return {
        type: 'ADD_TODO',
        payload: { task: todo, complete: false }
    }
};

export const toggleComplete = (index) => {
    console.log(`Toggling todo item number ${index + 1}`);
    return {
        type: TOGGLE_COMPLETE,
        payload: index
    }
}