import PropTypes from "prop-types";

function Form({ className = "", onSubmit = () => {}, children }) {
  return (
    <form method="post" className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

export default Form;
