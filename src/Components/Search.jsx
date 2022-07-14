import React from "react";

export default function Search(props) {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          props.search(event.target.value);
        }}
      />
    </div>
  );
}
