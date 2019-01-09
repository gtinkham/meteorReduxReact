import React from 'react';



const Navbar = () => (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Grant's Website</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">SIGN IN</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">SIGN UP</a>
                </li>
            </ul>
        </div>
    </nav>
);


export default Navbar;