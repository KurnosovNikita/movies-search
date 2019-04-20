import React from "react";

const MenuButton = ({onClick, className, text, id}) => (
    <button onClick={onClick} className={className} id={id}>{text}</button>
);

export default MenuButton;