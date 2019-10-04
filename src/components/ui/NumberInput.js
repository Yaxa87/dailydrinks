import React from "react";

const NumberInput = ({
    name,
    placeholder,
    value,
    onChange,
    disabled
}) => {
    return (
        <input
            type="number"
            className="text-input"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

export default NumberInput;