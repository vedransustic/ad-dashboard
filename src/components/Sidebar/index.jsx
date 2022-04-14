import "./index.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <h2 className="logo">Dashboard</h2>
      </div>
      <hr />
      <div className="center">
        <ul>
          <h4>MAIN</h4>
          <li>
            <DashboardOutlinedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <h4>LISTS</h4>
          <li>
            <PeopleOutlineRoundedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <InventoryOutlinedIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <h4>USEFUL</h4>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Notification</span>
          </li>
          <h4>SERVICE</h4>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <BookOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <h4>USER</h4>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" />
        <div className="colorOption" />
      </div>
    </div>
  );
};

export default Sidebar;
