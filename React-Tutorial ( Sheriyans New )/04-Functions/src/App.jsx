import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      <div onWheel={(elem) => {
        console.log(elem.deltaY)
      }} className="container">
        <div className="page1"></div>
        <div className="page1"></div>
        <div className="page1"></div>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </>
  );
};

export default App;
