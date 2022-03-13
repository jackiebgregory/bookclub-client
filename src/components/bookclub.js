import React from "react"
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./bookclub.css"


const RequireAuth = ({children}) => {
    if (localStorage.getItem("bc_token")) {
        return children
    } else {
        return <Navigate to="/login" />
    }
} 

export const BookClub = () => (
    <>
    <header>social media icons here</header>
    <BrowserRouter>
    <Routes>
        <Route path="*" element={<RequireAuth>
            <NavBar />
            <ApplicationViews />
            </RequireAuth>}/>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
    <footer>Parnassus Books | 3900 Hillsboro Pike Suite 14 | Nashville, TN 37215 | (615) 953-2243 | Monday to Saturday, 10am-6pm; Sunday 12pm-6pm</footer>
    </>
)
