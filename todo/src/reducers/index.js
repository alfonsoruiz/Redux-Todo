//Reducer returs an object representing the state tree
import { ADD_TODO } from '../actions';

// Takes in initial state tree from reducer
const initialState = {
    todos: []
};

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            };
        default:
            return state;
    }
};