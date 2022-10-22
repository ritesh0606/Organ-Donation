import React from 'react'

const About = () => {
    return (
        <div>
           <section id="about">
               <div className="container my-5 py-5">
                  <div className="row">
                     <div className="col-md-6">
                        <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5"/>
                     </div>
                     <div className="col-md-6">
                        <h3 className="fs-5 mb-0"><br></br>About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are?</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">Our website takes the lead in online donor pledges. Our form is easy to fill and submit on the website, and the donor cards are couriered to all parts of India. We take pride in sending donor cards within 4 weeks to everyone who has taken the brave decision to pledge their organs, no matter where in India they are </p>
                        
                        <button className="btn btn-outline-primary rounded-pill px-4 py-2">Learn more</button>
                     </div>
                  </div>
               </div>
           </section>
        </div>
    );
}

export default About;