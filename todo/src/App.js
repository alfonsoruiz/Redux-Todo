import React from 'react';

import TodoList from './components/TodoList'

const App = props => {
    return (
        <div className='App'>
            <h1>Redux TodoList</h1>
            <TodoList />
        </div>
    );
};

export default App;