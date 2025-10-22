import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ icono, texto, to, onClick }) => {
  return (
    <Link to={to} onClick={onClick} className="button">
      {icono && <span className="text-lg">{icono}</span>}
      <span>{texto}</span>
    </Link>
  );
};

Button.propTypes = {
  icono: PropTypes.node,
  texto: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
