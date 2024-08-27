import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../components/Admin";
import Main from "../components/Main";
import Student from "../components/Student";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PhoneBook from "../components/PhoneBook/PhoneBook";

function AppRouter(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/student" element={<Student />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/contact" element={<PhoneBook />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
