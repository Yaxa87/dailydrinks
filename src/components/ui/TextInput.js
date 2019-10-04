import React from "react";

const TextInput = ({
    name,
    placeholder,
    value,
    onChange,
    disabled
}) => {
    return (
        <input
            type="text"
            className="text-input"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

export default TextInput;