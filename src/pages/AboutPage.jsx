import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h2>About the Project</h2>
        <p>This frontend connects to the Spring Boot Yard API backend using React and Bootstrap.</p>
        <ul>
          <li><strong>Frontend:</strong> React, Bootstrap 5, React Router</li>
          <li><strong>Backend:</strong> Spring Boot, JPA, H2/MySQL</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;