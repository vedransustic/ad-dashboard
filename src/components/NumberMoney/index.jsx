import React from "react";
import "./index.scss";

const ResultNumber = ({ isMoney, number, className }) => {
  if (isMoney) {
    return <span className={className}>${number}k</span>;
  }

  return <span>{number}</span>;
};

export default ResultNumber;
