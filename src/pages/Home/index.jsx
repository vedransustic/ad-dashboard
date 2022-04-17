import React from "react";
import "./index.scss";
import { Sidebar, Navbar } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
