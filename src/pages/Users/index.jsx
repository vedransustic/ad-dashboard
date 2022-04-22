import React from "react";
import DataTable from "../../components/DataTable";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components";

const Users = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default Users;
