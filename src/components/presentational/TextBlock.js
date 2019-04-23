import React from "react";

const Text = ({onClick, className, text, id}) => (
    <div onClick={onClick} className={className} id={id}>{text}</div>
);

export default Text;