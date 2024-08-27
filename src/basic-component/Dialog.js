import React from "react";


function Dialog(props) {
    const { closeModal } = props;
    return (
        <div className="styled-form-wrappers">
            <div className="styled-form">
                <p style={{ color: "red" }}>Please prove a valid user detail.</p>
                <button onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default Dialog;
