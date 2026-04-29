import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const YardCreatePage = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newYard = { name, location };

        fetch('http://localhost:8080/api/yards', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newYard)
        })
        .then(() => {
            alert("Yard created successfully!"); // We will replace this with Context later
            navigate('/yards');
        })
        .catch(err => console.error(err));
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-success mb-4">Add New Yard</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Yard Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Location</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={location} 
                            onChange={(e) => setLocation(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Save Yard</button>
                </form>
            </div>
        </div>
    );
};

export default YardCreatePage;
