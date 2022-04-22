import { NumberMoney, Title, Icon } from "../../components";
import "./index.scss";
import { Link } from "react-router-dom";
import PercentageResult from "../../components/PercentageResult";

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
        <NumberMoney isMoney={isMoney} number={number} />
        <Link to={linkTo} className="link">
          {linkText}
        </Link>
      </div>
      <div className="right">
        <PercentageResult percentage={percentage} />
        <Icon children={icon} bgColor={bgColor} color={color} />
      </div>
    </div>
  );
};

export default Widget;
