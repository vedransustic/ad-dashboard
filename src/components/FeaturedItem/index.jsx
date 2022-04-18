import React from "react";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import ResultNumber from "../NumberMoney";
import "./index.scss";

const FeaturedItem = ({ title, number }) => {
  const netNumber = number > 0 ? "up" : "down";
  return (
    <div className="item">
      <div className="itemTitle">{title}</div>
      <div className="itemResult">
        {netNumber === "up" ? (
          <KeyboardArrowUpOutlined />
        ) : (
          <KeyboardArrowDownOutlined />
        )}
        <ResultNumber isMoney={true} number={number} className={netNumber} />
      </div>
    </div>
  );
};

export default FeaturedItem;
