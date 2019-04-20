import React from "react";

const LinkButton = ({onClick, className, text, id}) => (
     <a onClick={onClick} className={className} id={id}>{text}</a>
);

export default LinkButton;