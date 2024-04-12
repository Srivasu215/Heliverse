import React from "react";
import Read from './Users/Read'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Delete from './Users/Delete'
import Insert from './Users/Insert'
import Update from './Users/Update'
import UsersCard from './Users/UsersCard'

const Users = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Read />} />
                <Route exact path="/insert" element={<Insert />} />
                <Route exact path="/Update" element={<Update />} />
                <Route exact path="/Cards" element={<UsersCard />} />

                {/* Add other routes here if needed */}
            </Routes>
        </Router>

    )
}





export default Users

