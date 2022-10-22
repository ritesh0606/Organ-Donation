import React from 'react'

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="conatiner my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            
                            <h1 className="dispaly-6 text-center mb-4">Know <b>Organ</b> Donation</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-4" >
                                <div class="card-body text-center">
                                <img src="/assets/kidney.png" alt="Services"/>
                                 
                                    <h5 class="card-title mb-3 fs-3 fw-bold">Kidney Donation</h5>
                                    <p class="card-text lead">Hundreds of thousands of people suffer from renal failure each year and undergo dialysis or await a kidney transplant.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                <img src="/assets/lungs.png" alt="Services" />
                                   <h5 class="card-title mb-3 fs-4 fw-bold"><br></br>Lungs Donation</h5>
                                    <p class="card-text lead">A lung transplant is a surgery to remove a person’s diseased lung and replace it with a healthy lung from a deceased donor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                <img src="/assets/heart.png" alt="Services" />
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Heart Donation</h5>
                                    <p class="card-text lead">Heart transplants are done soon after brain death of the donor is determined. Machines keep the heart and other organs functioning until the transplant teams arrive.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                <img src="/assets/eye.png" alt="Services" />
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Eyes Donation</h5>
                                    <p class="card-text lead">Donated eyes can be used to restore vision in people who are suffering from corneal blindness. The front, clear and transparent tissue of the eye called as cornea can be used to restore vision in a corneal blind person</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                <img src="/assets/liver.png" alt="Services" />
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Liver Donation</h5>
                                    <p class="card-text lead">Liver transplantation is the universal treatment for end-stage chronic liver disease (ESLD) or cirrhosis, and is a life-saving operation for patients with acute liver failure</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;