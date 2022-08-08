import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import NotFound from "./components/NotFound/NotFound.js";
import Home from "./components/Home/Home.js";

// const lightbulbON = "D:\mamoproblemas\Programming\Portfolio\React Portfolio\react-portfolio\assets\light-bulbON";
// const lightbulbOFF = "D:\mamoproblemas\Programming\Portfolio\React Portfolio\react-portfolio\assets\light-bulbOFF";
// const switchON = "D:\mamoproblemas\Programming\Portfolio\React Portfolio\react-portfolio\assets\switchON";
// const switchOFF = "D:\mamoproblemas\Programming\Portfolio\React Portfolio\react-portfolio\assets\switchOFF.png"


function App() {
  return (
    <div className="App">

      {/* LIGHT-BULB */}
      {/* <div>
        <img src="D:\mamoproblemas\Programming\Portfolio\React Portfolio\react-portfolio\assets\switchOFF.png" alt='switchOFF'/>
        <img src={lightbulbOFF} alt='lightbulbOFF'/>
      </div> */}

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