import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import "../../styles/PhoneBook.css";
import { getPhoneBookData, postPhoneBookData, deletePhoneBookData, putPhoneBookData } from "../../api/PhoneBook";
import Dialog from "../../basic-component/Dialog";

class PhoneBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backupContactList: [
            ],
            contactList: [
            ],
            filterContactList: [],
            editId: "",
            userDetails: {
                name: "",
                phone: ""
            },
            editUserDetails: {
                name: "",
                phone: ""
            },
            showErrorModal: false
        };
    }

    onchangeHandler(fieldname, event) {
        const { userDetails } = this.state;
        userDetails[fieldname] = event.target.value;
        this.setState({ userDetails: userDetails });
    }

    saveContactDetails() {
        const { userDetails, backupContactList } = this.state;
        const initialUserDetails = { name: "", phone: "" };
        const regexForName = /^[a-zA-Z ]+$/;
        const regexForPhone = /^[0-9]{10}$/;
        const existingIndex = backupContactList.findIndex(val => val.phone === userDetails.phone);
        if (!(regexForName.test(userDetails.name) && regexForPhone.test(userDetails.phone) && existingIndex < 0)) {
            this.setState({ showErrorModal: true });
            return;
        }
        postPhoneBookData(userDetails)
            .then(data => {
                backupContactList.push(data.result);
                this.setState({ contactList: backupContactList, userDetails: initialUserDetails, backupContactList: backupContactList });
            })
    }

    deleteContactDetails(id) {
        const { backupContactList } = this.state;
        deletePhoneBookData(id).then(data => {
            const deleteIndex = backupContactList.findIndex(val => val._id === data.result._id);
            backupContactList.splice(deleteIndex, 1);
            this.setState({ contactList: backupContactList, backupContactList: backupContactList });
        })

    }

    filterContactDetails(event) {
        const { backupContactList } = this.state;
        const searchVal = event.target.value;
        const filterContactList = backupContactList.filter(val => val.name.indexOf(searchVal) >= 0 || String(val.phone).indexOf(searchVal) >= 0);
        this.setState({ contactList: filterContactList });
    }

    editContactDetails(id, phone, name) {
        let { editUserDetails } = this.state;
        editUserDetails = {
            name: name,
            phone: phone
        }
        this.setState({ editId: id, editUserDetails: editUserDetails });
    }

    saveUpdatedContactDetails() {
        const { editUserDetails, editId, backupContactList } = this.state;
        putPhoneBookData(editUserDetails, editId).then(data => {
            const updatedObj = { ...data.result, ...editUserDetails };
            const updateIndex = backupContactList.findIndex(val => val._id === data.result._id);
            backupContactList[updateIndex] = updatedObj;
            this.setState({ editId: "", backupContactList: backupContactList, contactList: backupContactList, editUserDetails: { name: "", phone: "" } });
        })

    }

    updateContactDetails(fieldname, event) {
        const { editUserDetails } = this.state;
        editUserDetails[fieldname] = event.target.value;
        this.setState({ editUserDetails: editUserDetails });
    }

    closeModal() {
        this.setState({ showErrorModal: false });
    }

    componentDidMount() {
        getPhoneBookData().then(phoneBookList => {
            this.setState({ backupContactList: phoneBookList.result, contactList: phoneBookList.result });
        }).catch(err => {
            console.log(err);
            this.setState({ backupContactList: [], contactList: [] })
        })
    }

    render() {
        const { contactList, userDetails, editId, editUserDetails, showErrorModal } = this.state;
        return (
            <div className="phone-book-wrapper">
                <ContactForm userDetails={userDetails} onchangeHandler={this.onchangeHandler.bind(this)} saveContactDetails={this.saveContactDetails.bind(this)} />
                <ContactList contactList={contactList} deleteContactDetails={this.deleteContactDetails.bind(this)} filterContactDetails={this.filterContactDetails.bind(this)} editContactDetails={this.editContactDetails.bind(this)} editId={editId} updateContactDetails={this.updateContactDetails.bind(this)} saveUpdatedContactDetails={this.saveUpdatedContactDetails.bind(this)}
                    editUserDetails={editUserDetails} />
                {showErrorModal ? <Dialog closeModal={this.closeModal.bind(this)} /> : null}
            </div>
        )
    }
}
export default PhoneBook;
