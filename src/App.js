import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import NotFound from "./components/NotFound/NotFound.js";
import Home from "./components/Home/Home.js";

function App() {
  return (
    <div className="App">

      {/* NAV */}
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>
      </header>

      {/* COMPONENTS */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;