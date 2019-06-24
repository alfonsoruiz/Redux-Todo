// Action Type
export const ADD_TODO = 'ADD_TODO'

// Action Creator
export const addTodo = (todo) => {
    console.log(todo);
    // Action
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}