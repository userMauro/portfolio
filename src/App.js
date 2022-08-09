import React from "react";
// import { Route, Routes, Link } from "react-router-dom";

//
import './App.css';

// components
// import NotFound from "./components/NotFound/NotFound.js";
// import Project from "./components/ProfileCard/ProfileCard.js";
import ProfileCard from "./components/ProfileCard/ProfileCard.js";
// import AboutMe from "./components/AboutMe/AboutMe";
import Information from "./components/Information/Information";

export default function App() {

  return (
    <div className="App">

      <div className="profile-about-projects">
        <ProfileCard />
        <Information />
      </div>

    </div>
  )
};