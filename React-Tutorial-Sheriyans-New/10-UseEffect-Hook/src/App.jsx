import React, { useEffect, useState } from "react";
import "./app.css";

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(function () {
    console.log("Use effect is running... NO dependency");
  }, []);

  useEffect(
    function () {
      console.log("Use effect is running... Num 1 is dependency");
    },
    [num1]
  );

  useEffect(
    function () {
      console.log("Use effect is running... Num 2 is dependency");
    },
    [num2]
  );

  return (
    <>
      <h1>{`Num 1 : ${num1}`}</h1>
      <h1>{`Num 2 : ${num2}`}</h1>
      <button
        onClick={() => {
          setNum1(num1 + 1);
        }}
      >
        Click Num 1
      </button>
      <br />
      <button
        onClick={() => {
          setNum2(num2 + 2);
        }}
      >
        Click Num 1
      </button>
    </>
  );
};

export default App;
