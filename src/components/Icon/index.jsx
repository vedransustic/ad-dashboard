import "./index.scss";

const Icon = ({ children, bgColor, color }) => {
  return (
    <div className="icon" style={{ backgroundColor: bgColor }}>
      <span style={{ color: color }}>{children}</span>
    </div>
  );
};

export default Icon;
