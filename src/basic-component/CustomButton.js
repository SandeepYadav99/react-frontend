import React from "react";

function CustomButton(props) {
    const { btnName, onclickHandler, bgColor } = props;
    return (
        <div className="custom-button-wrapper">
            <button onClick={onclickHandler} style={{ backgroundColor: bgColor }}>{btnName}</button>
        </div>
    )
}
export default CustomButton;
