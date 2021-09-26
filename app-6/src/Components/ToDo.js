import React, { useState } from "react";

const ToDo = (props) => {
  const renderedList = props.taskImport.map((e, i) => <h2 key={i}>{e}</h2>);
  return <div>{renderedList}</div>;
};

export default ToDo;
