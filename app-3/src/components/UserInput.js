import React, { useState } from "react";

const UserInput = (props) => {
  return (
    <div>
      <input onChange={props.onChange} />
    </div>
  );
};

export default UserInput;
