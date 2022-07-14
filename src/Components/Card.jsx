import React from "react";

export default function Card(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <button onClick={() => props.getData("Sending data to parent")}>
        Click Me
      </button>
    </div>
  );
}
