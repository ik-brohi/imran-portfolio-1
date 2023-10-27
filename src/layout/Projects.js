import React from 'react';

const Projects = () => {
    return (
        <>
            <div className="d-flex flex-column h-100 bg-light">
                <main className="flex-shrink-0">
                    <section className="py-5">
                        <div className="container px-5 mb-5">
                            <div className="text-center mb-5">
                                <h1 className="display-5 fw-bolder mb-0"><span
                                    className="text-gradient d-inline">Projects</span></h1>
                            </div>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-11 col-xl-9 col-xxl-8">
                                    <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bolder">Healthcare Freelance Pakistan</h2>
                                                    <p>In my healthcare freelance project based in Pakistan, I'm dedicated to improving access to quality healthcare services. This initiative aims to connect skilled medical professionals with patients in need, ensuring timely and cost-effective care. Through innovation and collaboration, we're enhancing healthcare delivery and making a positive impact on the well-being of our communities. Join us in our mission to create a healthier and more accessible healthcare system in Pakistan.</p>
                                                </div>
                                                <img className="img-fluid"
                                                     src="/healthcare.jpg" alt="/"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card overflow-hidden shadow rounded-4 border-0">
                                        <div className="card-body p-0">
                                            <div className="d-flex align-items-center">
                                                <div className="p-5">
                                                    <h2 className="fw-bolder">FingerSnap</h2>
                                                    <p>FingerSnap is a user-friendly image capturing app that simplifies the process of taking high-quality photos with just a touch. Designed for quick and convenient image capture, this app offers intuitive controls and features to ensure you never miss the perfect shot. Whether it's capturing memories or documenting important details, FingerSnap is your go-to tool for instant image capture at your fingertips. Make your photos memorable with ease using FingerSnap.</p>
                                                </div>
                                                <img className="img-fluid hand-pic"
                                                     src="/finger.jpg" alt="..."/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-5 bg-gradient-primary-to-secondary text-white">
                        <div className="container px-5 my-5">
                            <div className="text-center">
                                <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                                <a className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact
                                    me</a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default Projects;