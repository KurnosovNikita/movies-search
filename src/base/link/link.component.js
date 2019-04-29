import React from "react";
import PropTypes from 'prop-types';

const Link = ({onClick, className, text, id}) => (
     <a onClick={onClick} className={className} id={id}>{text}</a>
);

Link.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
};

export default Link;
