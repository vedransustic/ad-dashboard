import "./index.scss";
import { ListTable, Navbar, Sidebar } from "../../components";

const List = ({ data }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <ListTable data={data} />
      </div>
    </div>
  );
};

export default List;
