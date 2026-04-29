import React, { useContext } from 'react'; // 1. Add useContext
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // 2. Import the Context

const NavBar = () => {
  const { appTitle } = useContext(AppContext); // 3. Grab the title from Context

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        {/* Now the Brand Name comes from your Global Context! */}
        <Link className="navbar-brand fw-bold" to="/">{appTitle}</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/yards">View Yards</Link>
          <Link className="nav-link" to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
