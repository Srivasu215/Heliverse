import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom'

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