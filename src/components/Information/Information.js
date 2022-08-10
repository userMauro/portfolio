import React from "react";
import { Route, Routes, Link } from "react-router-dom";

// css
import './Information.css';

// components
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import NotFound from "../NotFound/NotFound";
import Certificates from "../Certificates/Certificates";

export default function Information () {

    return (
        <div className="Information">

            {/* RUTEO DE COMPONENTES */}
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />}  />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
            {/* NAVBAR */}
            <div className="information-nav">
                <Link to="/" className="information-nav-btn-aboutme">About me</Link>
                <Link to="/projects" className="information-nav-btn-projects">Projects</Link>
                <Link to="/certificates" className="information-nav-btn-certificates">Certificates</Link>
            </div>
            
        </div>
    )
};