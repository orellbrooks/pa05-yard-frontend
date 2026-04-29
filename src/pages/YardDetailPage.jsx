import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const YardDetailPage = () => {
    const { id } = useParams();
    const [yard, setYard] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/yards/${id}`)
            .then(res => res.json())
            .then(data => setYard(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!yard) return <div className="container mt-5">Loading details...</div>;

    return (
        <div className="container mt-5">
            <div className="card shadow border-success">
                <div className="card-header bg-success text-white">
                    <h3>Yard Details: {yard.name}</h3>
                </div>
                <div className="card-body">
                    <p><strong>ID:</strong> {yard.id}</p>
                    <p><strong>Location:</strong> {yard.location}</p>
                    <hr />
                    <Link to="/yards" className="btn btn-secondary me-2">Back to List</Link>
                    <button className="btn btn-danger">Delete Yard</button>
                </div>
            </div>
        </div>
    );
};

export default YardDetailPage;