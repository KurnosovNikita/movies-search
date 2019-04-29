import React from "react";
import PropTypes from 'prop-types';

const Input = ({onInput, onKeyDown, className, containerClassName, text, id, placeholder}) => (
    <div className={containerClassName}>
        <input onInput={onInput} onKeyDown={onKeyDown} className={className} id={id} placeholder={placeholder}/>
    </div>
);

Input.propTypes = {
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    className: PropTypes.string,
    containerClassName: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
