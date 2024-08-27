import React from "react";

function CustomInput(props) {
    const { value, onchangeHandler, placeholder, width, disabled } = props;
    return (
        <div className="custom-input-wrapper">
            <input placeholder={placeholder} value={value} onChange={onchangeHandler} style={{ width: width }} disabled={disabled} />
        </div>
    )
}
export default CustomInput;
