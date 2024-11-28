import React, { useState } from "react";
import "./App.css";
import {NavLink} from "react-router-dom"

function Home() {
  return (
    <div className="App">
      {/* <div className="background"></div> */}
      <div className="tap_here">
           <span className="content">
           <NavLink to="/panel">Tap here</NavLink>
           </span>
      </div>
    </div>
  );
}

export default Home;
