import React from "react";

const TextArea = ({
    name,
    placeholder,
    value,
    onChange,
    disabled
}) => {
    return (
        <textarea
            rows="4"
            className="text-input"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        ></textarea>
    );
};

export default TextArea;