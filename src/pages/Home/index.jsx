import React from "react";
import { widgetData } from "../../constant";
import "./index.scss";
import { Sidebar, Navbar } from "../../components";
import { Widget } from "../../containers";

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
      </div>
    </div>
  );
};

export default Home;
