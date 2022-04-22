import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Online from "./components/Online";
import Offline from "./components/Offline";
import Contact from "./components/Contact";
import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (
    
    <Router basename="/">
      <Navbarmenu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Online" element={<Online />}/>
        <Route path="/Offline" element={<Offline />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
