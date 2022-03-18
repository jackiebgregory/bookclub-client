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
    <header>
        <div className="social-icons">
        <ul>
        <li><img src="https://www.parnassusbooks.net/sites/all/themes/contrib/santa-rosa/images/facebook.png"></img></li>
        <li><img src="https://www.parnassusbooks.net/sites/all/themes/contrib/santa-rosa/images/twitter.png"></img></li>
        <li><img src="https://www.parnassusbooks.net/sites/all/themes/contrib/santa-rosa/images/youtube.png"></img></li>
        <li><img src="https://www.parnassusbooks.net/sites/all/themes/contrib/santa-rosa/images/instagram.png"></img></li>
        <li><img src="https://www.parnassusbooks.net/sites/all/themes/contrib/santa-rosa/images/email.png"></img></li>
        </ul>
        </div>
    </header>
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
    
    <footer className="footer-1">
        
        <h2>STORE INFORMATION</h2>
        <div>
            <a className="footer-1" href="https://www.parnassusbooks.net/about-us">About Us</a>
        </div>
        <div>
            <a className="footer-1" href="https://www.parnassusbooks.net/frequently-asked-questions">FAQ</a>
        </div>
        
    </footer>

    <footer className="footer-2">Parnassus Books | 3900 Hillsboro Pike Suite 14 | Nashville, TN 37215 | (615) 953-2243 | Monday to Saturday, 10am-6pm; Sunday 12pm-6pm</footer>
    </>
)
