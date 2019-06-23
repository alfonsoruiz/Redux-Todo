//Reducer returs an object representing the state tree

const reducer = () => {
    return {
        todos: [
            { task: 'Item 1', completed: false },
            { task: 'Item 2', completed: false }
        ]
    }
}

export default reducer;