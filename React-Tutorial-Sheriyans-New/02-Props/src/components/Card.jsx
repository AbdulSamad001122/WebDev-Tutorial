import React from "react";

const Card = (props) => {
  console.log(props.user , props.age);
  return (
    <div className="card">
      <img
        src={props.img}
        alt="Profile"
      />
      <h1>{props.user} , {props.age}</h1>
      <p>Web Developer</p>
      <button>Follow Me</button>
    </div>
  );
};

export default Card;
