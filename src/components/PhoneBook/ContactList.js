import React from "react";
import CustomInput from "../../basic-component/CustomInput";
import CustomButton from "../../basic-component/CustomButton";
import Card from "../../basic-component/Card";

function ContactList(props) {
    const { contactList, deleteContactDetails, filterContactDetails, editContactDetails, editId, updateContactDetails, saveUpdatedContactDetails, editUserDetails } = props;
    const defaultImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
    return (
        <div>
            <CustomInput width="580px" placeholder="search" onchangeHandler={filterContactDetails} />
            {contactList && contactList.length > 0 ?
                <div className="contact-list-wrapper">
                    {contactList.map(val => {
                        return (
                            <div key={val._id} className="contact-wrapper">
                                <Card phone={val.phone} name={val.name} imgUrl={defaultImage} isEditable={editId === val._id} onChangeHandler={updateContactDetails} editUserDetails={editUserDetails} />
                                {editId === val._id ?
                                    <CustomButton btnName="Save" bgColor={"green"} onclickHandler={saveUpdatedContactDetails} />
                                    :
                                    (<div>
                                        <CustomButton btnName="Edit" bgColor={"#85853d"} onclickHandler={() => editContactDetails(val._id, val.phone, val.name)} />
                                        <CustomButton btnName="Delete" bgColor={"red"} onclickHandler={() => deleteContactDetails(val._id)} />
                                    </div>)
                                }

                            </div>
                        )
                    })}
                </div>

                :
                <p className="no-details-text">No details Available.</p>
            }
        </div>
    )
}
export default ContactList;
