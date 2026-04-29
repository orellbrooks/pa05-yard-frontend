import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer'; // Import Footer
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import YardListPage from './pages/YardListPage';
import YardDetailPage from './pages/YardDetailPage';
import YardCreatePage from './pages/YardCreatePage';
import YardEditPage from './pages/YardEditPage'; // Import Edit Page
import './styles/custom.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/yards" element={<YardListPage />} />
            <Route path="/yards/new" element={<YardCreatePage />} />
            <Route path="/yards/:id" element={<YardDetailPage />} />
            <Route path="/yards/:id/edit" element={<YardEditPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
