import React from "react";
import "./index.scss";
import { Sidebar } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">CONTENT</div>
    </div>
  );
};

export default Home;
