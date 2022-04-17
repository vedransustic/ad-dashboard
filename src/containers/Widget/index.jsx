import { WidgetNumber, Title, Icon } from "../../components";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";

const Widget = ({
  title,
  isMoney,
  number,
  linkText,
  linkTo,
  percentage,
  icon,
  bgColor,
  color,
}) => {
  return (
    <div className="widget">
      <div className="left">
        <Title className="widget-title" text={title} />
        <WidgetNumber isMoney={isMoney} number={number} />
        <Link to={linkTo} className="link">
          {linkText}
        </Link>
      </div>
      <div className="right">
        <div className="widget-result">
          {percentage > 0 ? (
            <span className="up">
              <KeyboardArrowUpOutlined />
              {percentage} %
            </span>
          ) : (
            <span className="down">
              <KeyboardArrowDownOutlined />
              {percentage} %
            </span>
          )}
        </div>
        <Icon children={icon} bgColor={bgColor} color={color} />
      </div>
    </div>
  );
};

export default Widget;
