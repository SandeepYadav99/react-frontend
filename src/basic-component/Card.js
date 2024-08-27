import React from "react";

function Card(props) {
    const { imgUrl, name, phone, isEditable, onChangeHandler, editUserDetails } = props;
    return (
        <div className="card-wrapper">
            <img alt="profile_pic" src={imgUrl} />
            <div className="profile-section">
                {isEditable ? <input value={editUserDetails.name} onChange={(e) => onChangeHandler("name", e)} /> : <p className="user-name">{name}</p>}
                {isEditable ? <input value={editUserDetails.phone} onChange={(e) => onChangeHandler("phone", e)} /> : <p className="user-phone">{phone}</p>}
            </div>
            <a href={`tel:${phone}`} >Call</a>
        </div>
    )
}
export default Card;
