import React from "react";
import PropTypes from 'prop-types';

const Button = ({onClick, className, text, id}) => (
    <button onClick={onClick} className={className} id={id}>{text}</button>
);

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
};

export default Button;