import React from "react";
 

const Navbar = () => {
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5">
    <div className="container-fluid">
        <a className="navbar-brand">Start Bootstrap</a>
        <button className="navbar-toggler" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end pe-5" id="navbarNavDropdown">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>  
        </>
    )
};

export default Navbar