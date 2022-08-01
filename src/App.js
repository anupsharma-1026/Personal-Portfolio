import "./index.css"
import Home from "./routes/Home";
import Project from './routes/Project';
import Contact from './routes/Contact';
import About from './routes/About';
import {Route , Routes } from "react-router-dom"
import React from 'react';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
};

export default App;
 