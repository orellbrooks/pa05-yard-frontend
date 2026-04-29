import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Yard Manager</a>
        <div className="navbar-nav">
          <a className="nav-link" href="/">Home</a>
          <a className="nav-link" href="/yards">Yards</a>
          <a className="nav-link" href="/about">About</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;