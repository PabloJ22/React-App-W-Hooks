import React, {useState} from 'react';
import './App.css';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Build another app using React',
      isCompleted: false
    },
    {
      text: 'Build a better app using React',
      isCompleted: false
    },
    {
      text: 'Get a React Gig',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
        />
      ))}
        
       <TodoForm />
      </div>
    </div>
  );
};

export default App;

