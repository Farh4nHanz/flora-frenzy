import PropTypes from "prop-types";

const Button = ({
  type = "button",
  className = "",
  onClick = () => {},
  children,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
