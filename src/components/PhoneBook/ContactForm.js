import React from "react";
import CustomInput from "../../basic-component/CustomInput";
import CustomButton from "../../basic-component/CustomButton";

function ContactForm(props) {
    const { userDetails, onchangeHandler, saveContactDetails } = props;
    return (
        <div>
            <h1>Phone Book Application</h1>
            <CustomInput placeholder="name" value={userDetails.name} onchangeHandler={(e) => onchangeHandler("name", e)} />
            <CustomInput placeholder="phone" value={userDetails.phone} onchangeHandler={(e) => onchangeHandler("phone", e)} />
            <CustomButton btnName="Add Contact" onclickHandler={saveContactDetails} />
        </div>
    )
}

export default ContactForm;
