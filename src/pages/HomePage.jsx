import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="p-5 mb-4 bg-light rounded-3 border shadow-sm">
        <h1 className="display-5 fw-bold text-success">Yard API Management</h1>
        <p className="fs-4">Manage your infrastructure records with this FAMU-integrated system.</p>
        <hr className="my-4" />
        <div className="d-flex gap-3">
          <Link to="/yards" className="btn btn-primary btn-lg">View All Yards</Link>
          <Link to="/yards/new" className="btn btn-outline-secondary btn-lg">Add New Yard</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;