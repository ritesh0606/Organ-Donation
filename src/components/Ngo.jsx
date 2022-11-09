import React, { useState } from 'react';

import { useNavigate } from 'react-router';

const Ngo = () => {

    const navigate = useNavigate()
    
    const [org, setOrg] = useState({
        ngo1 : "",
        ngoemail : "",
        ngoblood : "",
    });

const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
       
    
    setOrg({...org, [name]:value, });
}
const handleSubmit = async (event)=>{
    event.preventDefault();
    
    const {ngo1, ngoemail, ngoblood} = org;

    try {
        //It is Submitted on port 3000 by default
        // Which is Front End but we need to 
        // Submit it on Backend which is on 
        // Port 3001. So we need Proxy.
        const res = await fetch('/ngo', {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
             ngo1, ngoemail, ngoblood
          })
        })
        console.log(res.status)
        if(res.status === 400 || !res){
          window.alert("Already Used Details")
        }else{
          // You need to Restart the Server for Proxy Works
          // Now Try Again
          window.alert("Registered Successfully");
          navigate.push('/')
        }
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-end">
            </div>

            <form onSubmit={handleSubmit} method="POST">
            <div id="cid_10" class="form-input-wide" data-type="control_head">
            <div class="form-header-group  header-default">
              <div class="header-text httal htvam">
                <h2 id="header_10" class="form-header" data-component="header">
                  Non Governmental Organization (NGO) Information
                </h2>
              </div>
            </div>
          </div>
            <div className="mb-3">
          <label htmlFor="exampleInputFirstName1" className="form-label">
            NGO Name
          </label>
          <input
            type="ngo1"
            className="form-control"
            id="exampleInputFirstName1"
            name="ngo1"
            value={org.ngo1}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName1" className="form-label">
            NGO Email ID
          </label>
          <input
            type="ngoemail"
            className="form-control"
            id="exampleInputFirstName1"
            name="ngoemail"
            value={org.ngoemail}
            onChange={handleInput}
            required
          />
        </div>
        <div>
                        <label htmlFor="exampleBlood" className="form-label">Blood Group</label>
                        <select className="form-control" id="exampleInputBlood" aria-label="Default select example"
                        name="ngoblood"
                        value={org.ngoblood}
                        onChange={handleInput} >
                            <option selected>Select Blood Group</option>
                            <option value="A">A</option>
                            <option value="A+">A+</option>
                            <option value="B">B</option>
                            <option value="O">B+</option>
                            <option value="O">O</option>
                            <option value="O">O-</option>
                            <option value="O">A-</option>
                            <option value="O">B-</option>
                        </select>
                    </div>
        <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                Submit & Register
        </button>
        </form>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <div className="col-md-4">
                        <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className='fa fa-medkit fa-4x mb-4 text-primary'></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Atharva Mathure</h5>
                                    <h6>Age:20</h6>
                                    <h6>Donated Blood Group : B+ </h6>
                                    
                                   
                                </div>                                    
                        </div>    
                    </div>
        </div>
        </div>
    );
}
export default Ngo;    