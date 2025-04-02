import { useState } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript')
  ];

  const addToHandler = (todoText: string) => {

  }

  return (
    <div>
      <NewTodo onAddTodo={addToHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
