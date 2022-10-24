/* eslint-disable react/jsx-no-undef */
import React from 'react';

import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <section id="home">
           <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                 <h1 className="display-4 fw-bolder mb-4 text-center text-white">Save a life after life</h1>
                 <p className="lead text-center fs-4 mb-5 text-white">Pledge for donor by... </p>
                 <div className="buttons d-flex justify-content-center">
                     <NavLink to="/donor" className="btn btn-light me-4 rounded-pill px-4 py-2">Login</NavLink>
                     <NavLink to="/organ" className="btn btn-outline-light rounded-pill px-4 py-2">Register</NavLink>
                </div>
                </div>
               </div>
            </div> 
        </section> 
       
        

    </div>
  );
}

export default Home;