import React, { useState } from "react";
import { login, getUsers } from "../api/Users";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");

    function loginMethod() {
        const credentials = { email: email, password: password };
        login(credentials)
            .then(data => {
                console.log(data);
            })
    }

    function getUser() {
        getUsers(token).then(data => console.log(data));
    }

    return (
        <div>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
            <input type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={loginMethod}>Login</button>
            <button onClick={getUser}>Get User</button>
        </div>
    )
}
