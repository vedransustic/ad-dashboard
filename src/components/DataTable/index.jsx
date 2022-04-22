import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../constant";
import "./index.scss";

const Datatable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
