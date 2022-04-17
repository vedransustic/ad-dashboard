import React from "react";
import "./index.scss";

const ResultNumber = ({ isMoney, number }) => {
  if (isMoney) {
    return <span>${number}k</span>;
  }

  return <span>{number}</span>;
};

export default ResultNumber;
