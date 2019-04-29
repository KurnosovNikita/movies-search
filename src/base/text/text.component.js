import React from "react";
import PropTypes from 'prop-types';

const Text = ({onClick, className, text, id}) => (
    <div onClick={onClick} className={className} id={id}>{text}</div>
);

Text.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
};

export default Text;
