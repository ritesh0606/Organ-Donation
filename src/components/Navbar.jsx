/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
        <img src="/assets/organ.png" alt="Navbar" />
          <NavLink className="navbar-brand" to="#">Organ Donation</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Know Organ Donation</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/laws">Laws</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>  
            </ul>
           
            
           {/* <button className="btn btn-outline-primary ms-auto px-4 rounded-pill">
               <i className="fa fa-sign-sign-in me-2"></i>Login</button>
            <button className="btn btn-outline-primary ms-2 px-4 rounded-pill">
    <i className="fa fa-user-plus me-2"></i>Register</button> */ }           
        </div>
        </div>
      </nav>
    </div>
    
    )
}

export default Navbar;
