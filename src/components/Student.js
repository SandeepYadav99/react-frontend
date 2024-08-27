import React, { Component } from "react";
import Table from "../basic-component/Table";
import { getStudentData, postStudentData, deleteStudentData, putStudentData } from "../api/Student";
import Modal from "../basic-component/ModalForm";
//postDta.name undefined, ""
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
            ],
            isModalOpen: false,
            postData: {
                name: "",
                roll: "",
                phone: ""
            },
            operationFlag: "POST",
            selectedRowId: ""
        }

    }

    componentDidMount() {
        this.updateTable();
    }

    updateTable = () => getStudentData()
        .then(data => {
            this.setState({ tableData: data.result });
        })

    inputHandler(e, fieldname) {
        const { postData } = this.state;
        postData[fieldname] = e.target.value;//postData.name =
        this.setState({ postData: postData });
    }
    openModal() {
        this.setState({ isModalOpen: true })
    }
    closeModal() {
        this.setState({ isModalOpen: false })
    }
    saveData() {
        if (this.state.operationFlag === "POST") {
            postStudentData(this.state.postData)
                .then(data => {
                    this.setState({ postData: { name: "", roll: "", phone: "" } });
                    this.updateTable();
                    this.closeModal()
                })
        } else {
            console.log(this.state);
            putStudentData(this.state.postData, this.state.selectedRowId)
                .then(data => {
                    this.setState({ postData: { name: "", roll: "", phone: "" }, operationFlag: "POST" });
                    this.updateTable();
                    this.closeModal()
                })
        }

    }

    deleteData(id) {
        deleteStudentData(id)
            .then(data => {
                this.updateTable();
            })
    }

    editData(id, data) {
        console.log(id, data);
        this.setState({ selectedRowId: id, isModalOpen: true, postData: data, operationFlag: "EDIT" });
    }

    render() {
        const headers = ["Name", "Roll", "Phone", "Action"]
        return (
            <div>
                <h1>Student</h1>
                <Table headers={headers} tableData={this.state.tableData} deleteData={this.deleteData.bind(this)} editData={this.editData.bind(this)} />
                <button className="styeld-button styled-add-button" onClick={this.openModal.bind(this)}>Add</button>
                {this.state.isModalOpen ? <Modal handler={this.inputHandler.bind(this)} saveData={this.saveData.bind(this)} postData={this.state.postData} /> : null}
            </div>


        )
    }
}

export default Student;
