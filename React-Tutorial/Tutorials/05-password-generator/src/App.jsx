import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const copyPasswordtoClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [numberAllowed, charAllowed, length]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-950 via-black to-green-800 text-green-400 px-4">
      <div className="w-full max-w-lg p-6 rounded-2xl bg-black/40 backdrop-blur-lg border border-green-600 shadow-2xl animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-300 animate-pulse">
          Password Generator
        </h1>

        {/* Password Input + Copy */}
        <div className="flex items-center mb-6 overflow-hidden rounded-lg shadow-md bg-black/60 border border-green-600">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 bg-transparent text-green-300 placeholder-green-600 outline-none"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordtoClipboard}
            className="bg-gradient-to-r from-green-500 to-lime-400 text-black font-bold px-4 py-2 hover:scale-105 transition-transform duration-300"
          >
            Copy
          </button>
        </div>

        {/* Settings */}
        <div className="space-y-5">
          {/* Length */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setlength(e.target.value)}
              className="w-2/3 accent-lime-400 transition-all"
            />
          </div>

          {/* Numbers */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setnumberAllowed((prev) => !prev)}
              className="w-5 h-5 accent-green-400 transition-all"
            />
          </div>

          {/* Characters */}
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setcharAllowed((prev) => !prev)}
              className="w-5 h-5 accent-green-400 transition-all"
            />
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default App;
