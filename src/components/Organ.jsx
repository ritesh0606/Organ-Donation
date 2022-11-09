import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import './organ.css';




const Organ = () => {

  const navigate = useNavigate()
  
  const [user, setUser] = useState({
    
    email : "",
    password : "",
    firstname : "",
    lastname : "",
    age : "",
    dob : "",
    phonenumber : "",
    streetaddress1 :"",
    streetaddress2 : "",
    city : "",
    state : "",
    postalcode : "",
    religion: "",
    temperature : "",
    bp : "",
    pulserate : "",
    respiratory : "",
    height : "",
    weight : "",
    blood : "",
    allergy : "",
    medications : "",
    medicalcondition : "",
    hospitalization : "",
    illness : "",
    dor : "",
    organdonate : "",
    purpose : "",
    terms : "",
    donarsign : "",
    witnesssign : "",
    physiciansign : "",
  });

  // Handle Inputs
  const handleInput = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
   

    setUser({...user, [name]:value, });
  }

 
  // Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    
    // Object DeStructuring
    // Store Object Data into Variables
    const { email, password, firstname, lastname, age, dob, phonenumber, streetaddress1, streetaddress2, city, state, postalcode, religion, temperature, bp, pulserate, respiratory, height, weight, blood, allergy, medications, medicalcondition, hospitalization, dor,
           asthma, illness, cardio, organdonate, diabetes, purpose, terms, hyptension, tuber, other, liver, kidney, pancreas, heart, cornea, bone, lung, bonemarrow, allofabove, transplant, research, both, ak1, ak2, ak3, ak4, ak5} = user;
        
           try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to 
      // Submit it on Backend which is on 
      // Port 3001. So we need Proxy.
      const res = await fetch('/organ', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
           email, password, firstname, lastname, age, dob, phonenumber, streetaddress1, streetaddress2, city, state, postalcode, religion, temperature, bp, pulserate, respiratory, height, weight, blood, allergy, medications, medicalcondition, hospitalization, dor,
           asthma, illness, cardio, diabetes, organdonate, purpose, terms, hyptension, tuber, other, liver, kidney, pancreas, heart, cornea, bone, lung, bonemarrow, allofabove, transplant, research, both, ak1, ak2, ak3, ak4, ak5
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
          
          <div className="">
            <form onSubmit={handleSubmit} method="POST">
            <div id="cid_10" class="form-input-wide" data-type="control_head">
            <div class="form-header-group  header-default">
              <div class="header-text httal htvam">
                <h2 id="header_10" class="form-header" data-component="header">
                  Personal Information
                </h2>
              </div>
            </div>
          </div>
          <br>
          </br>
          
          <div className="mb-3">
          <label htmlFor="exampleInputFirstName1" className="form-label">
            First Name
          </label>
          <input
            type="firstname"
            className="form-control"
            id="exampleInputFirstName1"
            name="firstname"
            value={user.firstname}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLastName1" className="form-label">
            Last Name
          </label>
          <input
            type="lastname"
            className="form-control"
            id="exampleInputLastName1"
            name="lastname"
            value={user.lastname}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputAge1" className="form-label">
          Age
        </label>
        <input
          type="age"
          className="form-control"
          id="exampleInputAge1"
          name="age"
          value={user.age}
          onChange={handleInput}
          required
        />
      </div>
      <div class="mb-3">
                        <label htmlfor="exampleInputDob1" class="form-label">Date of Birth</label>
                        <br/>
                        <input type="date" id="exampleInputDob1" name="dob"  value={user.dob} onChange={handleInput} required/>
                    </div>
          <div className="mb-3">
          <label htmlFor="exampleInputPhoneNumber1" className="form-label">
            Phone Number
          </label>
          <input
            type="phonenumber"
            className="form-control"
            id="exampleInputPhoneNumber1"
            name="phonenumber"
            value={user.phonenumber}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email 
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          name="email"
          value={user.email}
          onChange={handleInput}
          required
        />
      </div>
      <div className="mb-3">
      <label htmlFor="exampleInputStreetAddress1" className="form-label">
        Street Address 1 
      </label>
      <input
        type="streetaddress1"
        className="form-control"
        id="exampleInputStreetAddress1"
        name="streetaddress1"
        value={user.streetaddress1}
        onChange={handleInput}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputStreetAddress2" className="form-label">
        Street Address 2 
      </label>
      <input
        type="streetaddress2"
        className="form-control"
        id="exampleInputStreetAddress2"
        name="streetaddress2"
        value={user.streetaddress2}
        onChange={handleInput}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputCity" className="form-label">
        City 
      </label>
      <input
        type="city"
        className="form-control"
        id="exampleInputCity"
        name="city"
        value={user.city}
        onChange={handleInput}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputState" className="form-label">
        State 
      </label>
      <input
        type="state"
        className="form-control"
        id="exampleInputState"
        name="state"
        value={user.state}
        onChange={handleInput}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPostalCode" className="form-label">
        Postal Code
      </label>
      <input
        type="postalcode"
        className="form-control"
        id="exampleInputPostalCode"
        name="postalcode"
        value={user.postalcode}
        onChange={handleInput}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputReligion" className="form-label" >
        Religion
      </label>
      <input
        type="religion"
        className="form-control"
        id="exampleInputReligion"
        name="religion"
        value={user.religion}
        placeholder="Eg: Hindu, Muslim, Christian etc"
        onChange={handleInput}
        required
      />
    </div>
      <div id="cid_11" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-default">
          <div class="header-text httal htvam">
            <h2 id="header_11" class="form-header" data-component="header">
              Medical Data
            </h2>
          </div>
        </div>
      </div>
      <br>
      </br>
      <div class="form-line" data-type="control_matrix" id="id_22">
        <label class="form-label form-label-left form-label-auto" id="label_22" for="input_22"> Vital Signs </label>
        <div id="cid_22" class="form-input">
          <table 
          summary="" 
          aria-labelledby="label_22" 
          cellPadding="4" 
          cellSpacing="0" 
          class="form-matrix-table"
           style={{width:"550px"}} 
           data-component="matrix">
            <tr class="form-matrix-tr form-matrix-header-tr">
              <th class="form-matrix-th" style={{border:"none"}}>
                 
              </th>
              <label htmlFor="exampleInputTemperature" className="form-label" >
        Temperature
      </label>
      <input
        type="temperature"
        className="form-control"
        id="exampleInputTemperature"
        name="temperature"
        value={user.temperature}
        placeholder="Eg: 97.3F"
        onChange={handleInput} />
            
            <label htmlFor="exampleInputBp" className="form-label" >
        bp
      </label>
            <input
        type="bp"
        className="form-control"
        id="exampleInputBp"
        name="bp"
        value={user.bp}
        placeholder="Eg: 90bpm"
        onChange={handleInput} />
             
             <label htmlFor="exampleInputBp" className="form-label" >
        Pulse Rate
      </label>
            <input
        type="pulserate"
        className="form-control"
        id="exampleInputPulserate"
        name="pulserate"
        value={user.pulserate}
        placeholder="(in bpm)"
        onChange={handleInput} />
             
             <label htmlFor="exampleInputRespiratory" className="form-label" >
        Respiratory
      </label>
            <input
        type="respiratory"
        className="form-control"
        id="exampleInputRespiratory"
        name="respiratory"
        value={user.respiratory}
        placeholder="(in bpm)"
        onChange={handleInput} />
            </tr>
           
            
          </table>
        </div>
      </div>
      <label htmlFor="exampleInputHeight" className="form-label" >
        Height
      </label>
            <input
        type="height"
        className="form-control"
        id="exampleInputHeight"
        name="height"
        value={user.height}
        placeholder="(in cm)"
        onChange={handleInput} />



<label htmlFor="exampleInputHeight" className="form-label" >
        Weight
      </label>
            <input
        type="weight"
        className="form-control"
        id="exampleInputWeight"
        name="weight"
        value={user.weight}
        placeholder="(in kg)"
        onChange={handleInput} />

                        <div>
                        <label htmlFor="exampleBlood" className="form-label">Blood Group</label>
                        <select className="form-control" id="exampleInputBlood" aria-label="Default select example"
                        name="blood"
                        value={user.blood}
                        onChange={handleInput} >
                            <option selected>Select Blood Group</option>
                            <option value="A">A+</option>
                            <option value="A+">O+</option>
                            <option value="B">B+</option>
                            <option value="O">AB+</option>
                            <option value="O">A-</option>
                            <option value="O">O-</option>
                            <option value="O">B-</option>
                            <option value="O">AB-</option>
                        </select>
                    </div>
      <div class="form-line" data-type="control_textarea" id="id_19">
        <label class="form-label form-label-top" id="label_19" htmlFor="input_19"> Do you have any known allergies? If yes, then please specify below. </label>
        <div id="cid_19" class="form-input-wide">
          <textarea id="input_19" className="form-control" name="allergy" cols="60" rows="6" data-component="textarea" aria-labelledby="label_19" value={user.allergy}
                        onChange={handleInput}></textarea>
        </div>
      </div>
      <div class="form-line" data-type="control_textarea" id="id_20">
        <label class="form-label form-label-top" id="label_20" for="input_20"> Are you currently taking medications? If yes, then please list the medications and the reasons why are you taking them. </label>
        <div id="cid_20" class="form-input-wide">
          <textarea id="input_20" className="form-control" name="medications" cols="60" rows="6" data-component="textarea" aria-labelledby="label_20" value={user.medications}
                        onChange={handleInput}></textarea>
        </div>
      </div>
      <div class="form-line" data-type="control_textarea" id="id_21">
        <label class="form-label form-label-top" id="label_21" for="input_21"> What is your current medical condition? Do you have any communicable disease, cardiovascular problems, diabetes, asthma etc.? </label>
        <div id="cid_21" class="form-input-wide">
          <textarea id="input_21" className="form-control" name="medicalcondition" cols="60" rows="6" data-component="textarea" aria-labelledby="label_21" value={user.medicalcondition}
                        onChange={handleInput}></textarea>
        </div>
      </div>
      <div class="form-line" data-type="control_textarea" id="id_23">
        <label class="form-label form-label-top" id="label_23" for="input_23"> Previous hospitalization (Provide the reason and treatment) </label>
        <div id="cid_23" class="form-input-wide">
          <textarea id="input_23" className="form-control" name="hospitalization" cols="60" rows="6" data-component="textarea" aria-labelledby="label_23" value={user.hospitalization}
                        onChange={handleInput}></textarea>
        </div>
      </div>
      <div class="form-line" data-type="control_checkbox" id="id_24">
        <label htmlFor="exampleCardio" className="form-label"> Family History Illnesses </label>
        <div>
        
        
        {/* <ul type= "radio" className="" aria-label=""
              name="illness"
              value={user.illness}
              onChange={handleInput} 
              required>

                <input type="radio" value="asthma" name="illness" /> asthma <br></br>
                <input type="radio" value="cardio" name="illness" /> cardio <br></br>
                <input type="radio" value="diabetes" name="illness" /> diabetes <br></br>
              </ul> */}

              <ul type= "radio" className="" aria-label=""
              name="illness"
              value={user.illness}
              onChange={handleInput} 
              required>

                
                <input type="checkbox" value="asthma" name="illness" /> Asthama <br></br>
                <input type="checkbox" value="cardio" name="illness" /> cardiovascular Disease <br></br>
                <input type="checkbox" value="diabetes" name="illness" /> Diabetes <br></br>
                <input type="checkbox" value="Hyper" name="illness" /> Hypertension <br></br>
                <input type="checkbox" value="tuber" name="illness" /> Tuberculosis <br></br>
                <input type="radio" value="alloftheabove" name="illness" /> None of the above
                
                </ul>

                             {/* <div class="form-check">
  <input class="form-check-input"  name= "illness" type="checkbox" value={user.illness} id="exampleInputAsthma"/>
  <label class="form-check-label" for="flexCheckDefault">
    Asthma
  </label>
</div> </ul>

<div class="form-check">
  <input class="form-check-input" name= "illness" type="checkbox" value={user.illness} id="exampleInputCardio"  />
  <label class="form-check-label" for="flexCheckChecked">
    Cardio
  </label>
</div> */}

              
     
      </div>
      </div>
      <div id="cid_25" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-default">
          <div class="header-text httal htvam">
            <h2 id="header_25" class="form-header" data-component="header">
              Organ Donation Details
            </h2>
          </div>
        </div>
      </div>
      

      <div class="form-line" data-type="control_checkbox" id="id_24">
        <label htmlFor="exampleCardio" className="form-label">Organs to be donated</label>
        
 
        <ul type= "radio" className="" aria-label=""
              name="iorgandonate"
              value={user.organdonate}
              onChange={handleInput} 
              required>

                
                <input type="checkbox" value="liver" name="organdonate" /> Liver <br></br>
                <input type="checkbox" value="kidney" name="organdonate" /> Kidney <br></br>
                <input type="checkbox" value="lungs" name="organdonate" /> Lungs <br></br>
                <input type="checkbox" value="heart" name="organdonate" /> Heart <br></br>
                <input type="checkbox" value="eye" name="organdonate" /> Eye <br></br>
                <input type="radio" value="alloftheabove" name="organdonate" /> All of the above
                
                </ul>
                </div>
      

   


                <div class="form-line" data-type="control_checkbox" id="id_24">
        <label htmlFor="exampleCardio" className="form-label">Specific Purpose For Donation</label>
        
 
        <ul type= "radio" className="" aria-label=""
              name="purpose"
              value={user.purpose}
              onChange={handleInput} 
              required>

                
                <input type="checkbox" value="liver" name="purpose" /> Medical Transplant<br></br>
                <input type="checkbox" value="kidney" name="purpose" /> Educational Research <br></br>
                <input type="checkbox" value="lungs" name="purpose" /> Both(Medical Transplant/Educational Research) <br></br>
                
                </ul>
                </div>
      <div id="cid_30" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-default">
          <div class="header-text httal htvam">
            <h2 id="header_30" class="form-header" data-component="header">
              Acknowledgment and Terms
            </h2>
          </div>
        </div>
      </div>
      <br>
      </br>
      <ul type= "radio" className="" aria-label=""
              name="terms"
              value={user.terms}
              onChange={handleInput} 
              required>

                
                <input type="checkbox" value="I confirm that the information I provided in this document is accurate and true" name="terms" />  I confirm that the information I provided in this document is accurate and true. <br></br>
                <input type="checkbox" value="I allow my organs to be donated for medical transplant or educational/research purposes" name="terms" />  I allow my organs to be donated for medical transplant or educational/research purposes. <br></br>
                <input type="checkbox" value="I acknowledge that I have to inform my family about this registration" name="terms" />   I acknowledge that I have to inform my family about this registration. <br></br>
                <input type="checkbox" value="I confirm that I always need to keep the organ donor card and the document that came with it" name="terms" />  I confirm that I always need to keep the organ donor card and the document that came with it.<br></br>
                <input type="checkbox" value=" I allow my information to be submitted to donor registry" name="terms" />  I allow my information to be submitted to donor registry. 
                </ul>



  <div style={{display: 'none'}}>
    Should be Empty:
    <input type="text" name="website" defaultValue />
  </div>


<br>
</br>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                Submit & Register
              </button>
            </form>
          </div>
        </div>
      </div>
        
    );
}

export default Organ;

// /* eslint-disable jsx-a11y/heading-has-content */
// /* eslint-disable no-restricted-globals */
// /* eslint-disable no-undef */
// import React from 'react'
// import { NavLink } from 'react-router-dom';

// const Organ = () => {

    

//     return (
//         <div>
//             <div className="container shadow my-5">
//                 <div className="row">
//                     <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
//                         <h1 className="display-4 fw-bolder">Welcome Back</h1>
//                         <p className="lead text-center">Enter your credentials to login</p>
//                         <h5 className="mb-4">OR</h5>
//                         <NavLink to="/organ" className="btn btn-outline-light rounded-pill pb-2 w-50"></NavLink>
//                     </div>
//                     <div className="col-md-6 p-5">
//                         <h1 className="display-6 fw-bolder mb-5"></h1>
//                         <form>
//                             <div class="mb-3">
//                                 <label for="exampleInputEmail1" class="form-label">Email address</label>
//                                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//                             </div>
//                             <div class="mb-3">
//                                 <label for="exampleInputPassword1" class="form-label">Password</label>
//                                 <input type="password" class="form-control" id="exampleInputPassword1" />
//                             </div>
//                             <div class="mb-3 form-check">
//                                 <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//                                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
//                             </div>
//                             <button type="submit" class="btn btn-primary">Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Organ;