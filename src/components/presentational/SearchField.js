import React from "react";

const SearchField = ({onInput, onKeyDown, className, text, id, placeholder}) => (
    <div className={"search-field-container"}>
        <input onInput={onInput} onKeyDown={onKeyDown} className={className} id={id} placeholder={placeholder}/>
    </div>
);

export default SearchField;