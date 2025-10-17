import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Samad" age={17} img="https://images.unsplash.com/photo-1760288256101-bb930c69bb61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"/>
      <Card user="Jilani" age={20} img="https://images.unsplash.com/photo-1759403415493-8da7b795dbfe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764"/>
      <Card user="Qadir" age={22} img="https://plus.unsplash.com/premium_photo-1759728838623-ebeccf966507?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"/>
    </div>
  );
};

export default App;
