import React, { useState } from "react";

const Filtered = ({ data, string }) => {
  const newArr = data
    .filter((item) => {
      console.log(item);
      return item.includes(string);
    })
    .map((e, i) => {
      return <h2 key={i}>{e}</h2>;
    });

  return <div>{newArr}</div>;
};

export default Filtered;
