import React from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
            <img scr="logo.png" alt=""/>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/books">Books</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/meetings/new">Create A Club</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/meetings/">Join A Club</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/profile">My Profile</Link>
            </li>
            {
                (localStorage.getItem("bc_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("bc_token")
                                navigate({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
