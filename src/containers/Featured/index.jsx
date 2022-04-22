import React from "react";
import "./index.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NumberMoney, Title, FeaturedItem } from "../../components";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={75} text={"75%"} strokeWidth={5} />
        </div>
        <Title className="featured-title" text={"Total Sales Made Today"} />
        <NumberMoney isMoney={true} number={420} />
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <FeaturedItem number={12.3} title="Target" />
          <FeaturedItem number={6.9} title="Target" />
          <FeaturedItem number={-2.4} title="Target" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
