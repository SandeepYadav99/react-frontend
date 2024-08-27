import React from "react";
import { useNavigate } from "react-router-dom";

function Main(props) {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Main</h1>
            <button onClick={() => navigate("/admin")}>Admin</button>
            <button onClick={() => navigate("/student")}>Student</button>
        </div>
    )
}

export default Main;
