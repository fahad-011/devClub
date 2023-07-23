import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Register from './components/Register/Register.js';
import SignIn from './components/SignIn/SignIn.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeWithNavbar />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

// Component for Home section with Navbar
function HomeWithNavbar() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
