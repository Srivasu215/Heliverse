import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowTable = () => {
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
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">SK</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi d-block mx-auto mb-1 d-none d-md-block" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                                </svg>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/insert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi d-block mx-auto mb-1 d-none d-md-block" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                </svg>Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-info" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi d-block mx-auto mb-1 d-none d-md-block" viewBox="0 0 16 16">
                                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5V5h4V1zM5 6H1v4h4zm1 4h4V6H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11zm0-1h4V6h-4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11zm-1 0V1H6v4z" />
                                </svg>Show Table</Link>
                        </li>
                        <li className="nav-item">

                            <Link className="nav-link text-white" to="/Cards">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi d-block mx-auto mb-1 d-none d-md-block" viewBox="0 0 16 16">
                                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                </svg>Show Cards</Link>
                        </li>
                    </ul>
                    <div className="ml-auto">
                        <form className="form-inline my-2 my-lg-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search by name"

                            />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
            <div className="card">

                <div className="card-body">

                    <table className="table container" style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid black' }}>S.no</th>
                                <th style={{ border: '1px solid black' }}>firstName</th>
                                <th style={{ border: '1px solid black' }}>lastName</th>
                                <th style={{ border: '1px solid black' }}>email</th>
                                <th style={{ border: '1px solid black' }}>password</th>
                                <th style={{ border: '1px solid black' }}>gender</th>
                                <th style={{ border: '1px solid black' }}>Update</th>
                                <th style={{ border: '1px solid black' }}>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {FetchData.map((item, index) => (
                                <tr key={item._id}>
                                    <td style={{ border: '1px solid black' }}>{index + 1}</td>
                                    <td style={{ border: '1px solid black' }}>{item.firstName}</td>
                                    <td style={{ border: '1px solid black' }}>{item.lastName}</td>
                                    <td style={{ border: '1px solid black' }}>{item.email}</td>
                                    <td style={{ border: '1px solid black' }}>{item.password}</td>
                                    <td style={{ border: '1px solid black' }}>{item.gender}</td>
                                    <td>
                                        <div className="col-md-6">
                                            <Link to={`/Update?id=${item._id}`}> <button className="btn btn-warning" type="button">Update</button></Link>

                                        </div>
                                    </td>
                                    <td>
                                        <div className="col-md-6">
                                            <button className="btn btn-danger" onClick={() => handleDelete(item._id)} type="button">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ShowTable;
