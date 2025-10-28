import React from "react";

const App = () => {
  // const user = {
  //   name: "Samad",
  //   age: 17,
  //   city: "Karachi",
  // };

  // localStorage.setItem("user", JSON.stringify(user));

  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <div>
      <p>App</p>
    </div>
  );
};

export default App;
