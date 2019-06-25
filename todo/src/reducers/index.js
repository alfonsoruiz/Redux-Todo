//Reducer returs an object representing the state tree
import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

// Takes in initial state tree from reducer
const initialState = {
    todos: []
    // {task: 'Clean Ruperts litter box', complete: true},
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };
        case TOGGLE_COMPLETE:
            return {
                todos: state.todos.map((todo,index) => action.payload === index ? {...todo, complete: !todo.complete} : todo)
            }
        default:
            return state;
    }
};