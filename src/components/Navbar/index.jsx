import "./index.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>

        <ul>
          <li>
            <LanguageOutlinedIcon className="icon" />
            English
          </li>
          <li>
            <DarkModeOutlinedIcon className="icon" />
          </li>
          <li>
            <FullscreenExitOutlinedIcon className="icon" />
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span className="counter">1</span>
          </li>
          <li>
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <span className="counter">2</span>
          </li>
          <li>
            <ListOutlinedIcon className="icon" />
          </li>
          <li>
            <img
              src="https://www.ziglar.com/wp-content/uploads/2016/09/michelle-prince-profile-img.png"
              alt="profile"
              className="avatar"
            />
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
