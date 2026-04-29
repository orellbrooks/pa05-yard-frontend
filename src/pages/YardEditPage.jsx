import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const YardEditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [yard, setYard] = useState({ name: '', location: '' });

    useEffect(() => {
        fetch(`http://localhost:8080/api/yards/${id}`)
            .then(res => res.json())
            .then(data => setYard(data))
            .catch(err => console.error(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/api/yards/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(yard)
        })
        .then(() => navigate('/yards'))
        .catch(err => console.error(err));
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4 border-warning">
                <h2 className="text-warning mb-4">Edit Yard Record</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Yard Name</label>
                        <input type="text" className="form-control" value={yard.name} 
                            onChange={(e) => setYard({...yard, name: e.target.value})} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Location</label>
                        <input type="text" className="form-control" value={yard.location} 
                            onChange={(e) => setYard({...yard, location: e.target.value})} required />
                    </div>
                    <button type="submit" className="btn btn-warning">Update Yard</button>
                </form>
            </div>
        </div>
    );
};

export default YardEditPage;
