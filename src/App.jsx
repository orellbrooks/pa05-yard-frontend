import React from 'react';
import NavBar from './components/NavBar';
// Note: We will add Bootstrap and Custom CSS imports here in the next step
import './styles/custom.css'; 

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-5 text-center">
        <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
          <h1 className="display-5 fw-bold text-success">Yard API Management</h1>
          <p className="fs-4">Welcome to your FAMU Yard Tracking System.</p>
          <hr />
          <p>Status: Frontend Connected</p>
        </div>
      </div>
    </div>
  );
}

export default App;