import React from 'react';

import Todos from "./components/Todos/Todos";
import NewTodo from "./components/Todos/NewTodo/NewTodo";


function App() {
    return (
        <div className="App">
            <NewTodo />
            <Todos />
        </div>
    );
}

export default App;
