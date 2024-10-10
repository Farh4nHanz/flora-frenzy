import PropTypes from "prop-types";

function FormInput({
  type = "text",
  placeholder = "",
  className = "",
  value = "",
  onChange = () => {},
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
      required
    />
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormInput;
