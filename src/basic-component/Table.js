import React from "react";

function Table(props) {
    const { headers, tableData, deleteData, editData } = props;
    return (
        <table className="styled-table">
            <TableHeader headers={headers} />
            <TableBody tableData={tableData} deleteData={deleteData} editData={editData} />
        </table>
    )
}

function TableHeader(props) {
    const { headers } = props;

    return (
        <thead className="styled-table-head">
            <tr>
                {headers && headers.map(elem => {
                    return (
                        <th key={elem}>{elem}</th>
                    )
                })}
            </tr>
        </thead>
    )
}

function TableBody(props) {
    const { tableData, deleteData, editData } = props;
    return (
        <tbody className="styled-table-body">
            {tableData && tableData.map(data => {
                return (
                    <tr key={data._id}>
                        <td>{data.name}</td>
                        <td>{data.roll}</td>
                        <td>{data.phone}</td>
                        <td>
                            <button className="styeld-button styled-edit-button" onClick={() => editData(data._id, data)}>Edit</button>
                            <button className="styeld-button styled-delete-button" onClick={() => deleteData(data._id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default Table;
