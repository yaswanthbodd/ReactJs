import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './Pages/Home'
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Navbar from "./Navbar";
import Profile from "./Pages/Profile";
const ReactRouterDom = ()=>{
    const [username,setUserName] = useState("yaswanth")
    return(
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home username={username}/>}/>
                    <Route path='/Menu' element={<Menu />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path='/Profile' element={<Profile username={username} setUserName={setUserName}/>} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default ReactRouterDom