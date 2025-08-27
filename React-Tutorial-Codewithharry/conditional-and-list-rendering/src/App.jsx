import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(true);
  const [todos, setTodos] = useState([
    { title: "Hey 1", desc: "I am a todo 1" },
    { title: "Hey 2", desc: "I am a todo 2" },
    { title: "Hey 3", desc: "I am a todo 3" },
  ]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {showbtn ? (
        <button>SHOW BUTTON IS TRUE</button>
      ) : (
        <button>SHOW BUTTON IS FALSE</button>
      )}

      {todos.map(todo => (
        <div key={todo.title}>
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      ))}

      <div className="card">
        <button
          onClick={() => {
            setshowbtn(!showbtn);
            setCount(count + 1);
          }}
        >
          TOGGLE SHOW BTN {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
