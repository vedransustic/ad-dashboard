import React from "react";
import { widgetData } from "../../constant";
import "./index.scss";
import { Sidebar, Navbar, Chart, Title } from "../../components";
import { Featured, Widget } from "../../containers";
import ListTable from "../../components/ListTable";

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
        <div className="list-container">
          <Title className="list-title" text="Lastest Transactions" />
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
