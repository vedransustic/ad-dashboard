import React from "react";
import { widgetData } from "../../constant";
import "./index.scss";
import { Sidebar, Navbar, Chart } from "../../components";
import { Featured, Widget } from "../../containers";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {widgetData.map((item, idx) => {
            return <Widget key={idx} {...item} />;
          })}
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
