import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UsersCard = () => {
    const [FetchData, setFetchData] = useState([]);

    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await fetch('http://localhost:8000/Api/User');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const LocalReturnData = await response.json();
                setFetchData(LocalReturnData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        handleSubmit();
    }, []);

    const handleDelete = async (id) => {
        const localfetch = await fetch(`http://localhost:8000/Api/User/${id}`, {
            method: 'DELETE'
        });
        if (localfetch.status === 201) {
            window.location.reload();
        };
    };

    return (
        <div className="card">

            <div className="card-deader">
                <Link to="/insert" className="btn btn-primary">Add</Link>

            </div>
            <div className="card-body ">


                <div className="row g-4">
                    {FetchData.map((item) => (
                        <div class="col-md-3">
                            <div className="card border-primary" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <p>First Name: <b>{item.firstName}</b></p>
                                    <p>lastName: {item.lastName}</p>
                                    <p>email: {item.email}</p>
                                    <p>password: {item.password}</p>
                                    <p>gender: {item.gender}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default UsersCard;
