import React from "react"
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"


const RequireAuth = ({children}) => {
    if (localStorage.getItem("bc_token")) {
        return children
    } else {
        return <Navigate to="/login" />
    }
} 

export const BookClub = () => (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<RequireAuth><NavBar /><ApplicationViews /></RequireAuth>}/>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
    </>
)
