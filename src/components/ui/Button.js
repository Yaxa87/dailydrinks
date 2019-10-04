import React from "react";

const Button = ({
    onClick,
    text
}) => {
    return (
        <input
            type="button"
            className="button"
            onClick={onClick}
            value={text}
        />
    );
};

export default Button;