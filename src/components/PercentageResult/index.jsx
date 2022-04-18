import React from "react";
import "./index.scss";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";

const PercentageResult = ({ percentage }) => {
  return (
    <div className="percentage-result">
      {percentage > 0 ? (
        <span className="up">
          <KeyboardArrowUpOutlined />
          {percentage} %
        </span>
      ) : (
        <span className="down">
          <KeyboardArrowDownOutlined />
          {percentage} %
        </span>
      )}
    </div>
  );
};

export default PercentageResult;
