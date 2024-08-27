import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../api/Users";

export default function Login(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    function signupMethod() {
        const credentials = { name: name, email: email, password: password };
        signUp(credentials)
            .then(data => {
                console.log(data);
                navigate("/login");
            })
    }

    return (
        <div>
            <input type="text" name="name" placeholder="name" onChange={e => setName(e.target.value)} />
            <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={signupMethod}>signup</button>
        </div>
    )
}
