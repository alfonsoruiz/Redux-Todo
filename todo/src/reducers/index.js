//Reducer returs an object representing the state tree
import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions';

// Takes in initial state tree from reducer
const initialState = {
    todos: []
    // {task: 'Todo description', complete: true},
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };
        case TOGGLE_COMPLETE:
            return {
                todos: state.todos.map((todo, index) => action.payload === index ? {...todo, complete: !todo.complete} : todo)
            };
        case DELETE_TODO:
            return {
                todos: state.todos.filter((todo, index) => action.payload !== index )
            };
        default:
            return state;
    }
};