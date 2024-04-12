import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UsersCard = () => {
    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const usersPerPage = 20; // Number of users per page

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/Api/User');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Logic to get current users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = userData
        .filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.includes(searchTerm.toLowerCase());
        })
        .slice(indexOfFirstUser, indexOfLastUser);

    // Logic for pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(currentUsers.length / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset current page when search term changes
    };

    return (
        <div className="card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>Users</h5>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <Link to="/insert" className="btn btn-primary mt-2">Add</Link>
            </div>
            <div className="card-body">
                <div className="row g-4">
                    {currentUsers.map((user, index) => (
                        <div key={index} className="col-md-3">
                            <div className="card border-primary" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <p>First Name: <b>{user.firstName}</b></p>
                                    <p>Last Name: {user.lastName}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Password: {user.password}</p>
                                    <p>Gender: {user.gender}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <nav>
                    <ul className="pagination justify-content-center">
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <button onClick={() => paginate(number)} className="page-link">
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default UsersCard;
