import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from './Pages/Home'
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Navbar from "./Navbar";
const ReactRouterDom = ()=>{
    return(
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/Menu' element={<Menu />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </Router>
        </div>
    )
}

export default ReactRouterDom