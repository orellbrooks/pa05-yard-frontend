import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import YardListPage from './pages/YardListPage'; // 1. Add this import
import './styles/custom.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/yards" element={<YardListPage />} /> {/* 2. Add this route */}
      </Routes>
    </Router>
  );
}

export default App;