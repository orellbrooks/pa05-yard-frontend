import React from 'react';
import NavBar from './components/NavBar';
import './styles/custom.css'; 

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <div className="hero-section text-center">
          <h1>Yard API Management</h1>
          <p>Managing FAMU Yard Records</p>
        </div>
      </div>
    </div>
  );
}

export default App;