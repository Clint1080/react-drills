import React from "react";

const NewTask = (props) => {
  return (
    <div>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder="Enter something to do"
      />
      <button onClick={props.onClick}>add</button>
    </div>
  );
};

export default NewTask;
