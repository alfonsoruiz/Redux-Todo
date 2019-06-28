import React from 'react';

import TodoList from './components/TodoList';
import './App.css';

const App = props => {
    return (
        <div className='App'>
            <h1>Redux Todo List</h1>
            <TodoList />
        </div>
    );
};

export default App;