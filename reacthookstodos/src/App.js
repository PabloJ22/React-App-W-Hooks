import React from 'react';
import logo from './logo.svg';
import './App.css';

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
