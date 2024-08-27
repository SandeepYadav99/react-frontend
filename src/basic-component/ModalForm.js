import React from "react";

function Modal(props) {
    const { handler, saveData, postData } = props;
    return (
        <div className="styled-form-wrappers">
            <div className="styled-form">
                <input type="text" onChange={(e) => handler(e, "name")} placeholder="name" value={postData.name} />
                <input type="number" onChange={(e) => handler(e, "roll")} placeholder="roll" value={postData.roll} />
                <input type="number" onChange={(e) => handler(e, "phone")} placeholder="phone" value={postData.phone} />
                <button className=" styeld-button styled-add-button" onClick={() => saveData()}>Save</button>
            </div>
        </div>

    )
}

export default Modal;
