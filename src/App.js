import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import HouseDetail from './pages/HouseDetail';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreditCard from './pages/CreditCard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/house/:id" element={<HouseDetail />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/credit-card" element={<CreditCard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
