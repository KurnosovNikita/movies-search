import React from "react";
import PropTypes from 'prop-types';

const Image = ({onClick, className, src, imageAlt}) => (
  <img
    className={className}
    src={src}
    alt={imageAlt}
    onClick={onClick}
  />
);

Image.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    src: PropTypes.string,
    imageAlt: PropTypes.string,
};

export default Image;