import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";

import './App.css';

import Resources from "./Resources";
import Speaking from "./Speaking";
import About from "./About";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/speaking" element={<Speaking/>} />
                <Route path="/resources" element={<Resources/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
