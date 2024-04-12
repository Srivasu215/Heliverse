import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

let Update = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState(""); // Default value set to Male
    const navigate = useNavigate()

    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const id = params.get("id");

    let LocalObj = { firstName, lastName, email, password, gender };

    useEffect(() => {
        const handleSubmit = async () => {
            try {
                const response = await fetch(`http://localhost:8000/Api/User/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const LocalReturnData = await response.json();
                setFirstName(LocalReturnData[0].firstName)
                setLastName(LocalReturnData[0].lastName)
                setEmail(LocalReturnData[0].email)
                setPassword(LocalReturnData[0].password)
                setGender(LocalReturnData[0].gender)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        handleSubmit();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(LocalObj);
        console.log("LocalObj::", LocalObj);

        const response = await fetch(`http://localhost:8000/Api/User/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(LocalObj),
        });
        let LocalReturnData = await response.json();
        if (Object.keys(LocalReturnData).length > 1) {
            navigate('/')
        }
    };

    return (

        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
                                <Link className="nav-link text-info" to="/Update">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi d-block mx-auto mb-1 d-none d-md-block" viewBox="0 0 16 16">
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                    </svg>Update</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/ShowTable">
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
            <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                <h3>Users</h3>

                <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" name="FirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    <div className="valid-feedback">Looks good!</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">E-mail</label>
                    <input type="text" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="invalid-feedback">Please provide a valid email.</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="invalid-feedback">Please provide a valid password.</div>
                </div>

                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Gender</label>
                    <select className="form-select" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                        <option >select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

export default Update;