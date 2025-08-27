import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setname] = useState("Harry");
  const [Form, setForm] = useState({
    email: "",
    phone: "",
  });

  const handleClick = () => {
    alert("Hey i am clicked!");
  };

  const handleMouseOver = () => {
    // alert("Hey i am a mouse over");
  };

  const handleChange = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>CLICK ME</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div>

      <input
        type="text"
        name="email"
        value={Form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={Form.phone}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
