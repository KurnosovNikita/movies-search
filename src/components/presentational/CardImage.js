import React from "react";

const CardImage = ({onClick, className, src, imageAlt}) => (
  <img
    className={className}
    src={src}
    alt={imageAlt}
    onClick={onClick}
  />
);

export default CardImage;