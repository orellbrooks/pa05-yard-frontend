import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const YardListPage = () => {
    const [yards, setYards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Replace this URL with your actual PA04 backend URL if different
        fetch('http://localhost:8080/api/yards')
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch yards');
                return response.json();
            })
            .then(data => {
                setYards(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="container mt-5"><h3>Loading yards...</h3></div>;
    if (error) return <div className="container mt-5 text-danger"><h3>Error: {error}</h3></div>;

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-success">All Yard Records</h2>
                <Link to="/yards/new" className="btn btn-primary">Add New Yard</Link>
            </div>

            {yards.length === 0 ? (
                <div className="alert alert-info">No yards found. Add one to get started!</div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-hover border shadow-sm">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {yards.map(yard => (
                                <tr key={yard.id}>
                                    <td>{yard.id}</td>
                                    <td>{yard.name}</td>
                                    <td>{yard.location}</td>
                                    <td>
                                        <Link to={`/yards/${yard.id}`} className="btn btn-sm btn-info me-2">View</Link>
                                        <Link to={`/yards/${yard.id}/edit`} className="btn btn-sm btn-warning me-2">Edit</Link>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default YardListPage;