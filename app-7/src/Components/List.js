import React from "react";
import ToDo from "./ToDo";

const List = (props) => {
  return (
    <div>
      <ToDo taskImport={props.taskImport} />
    </div>
  );
};

export default List;
