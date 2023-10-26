import './App.css';
import React, { useRef } from 'react';

function App() {
    const resumeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToResume = () => {
        if (resumeRef.current) {
            resumeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <body className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 position-sticky">
                    <div className="container px-5">
                        <a className="navbar-brand" href="index.html"><span className="fw-bolder text-primary">Start Bootstrap</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span
                            className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={scrollToResume}>
                                        Resume
                                    </a></li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={scrollToResume}>
                                        Projects
                                    </a></li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={scrollToResume}>
                                        Contacts
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <header className="py-5">
                    <div className="container px-5 pb-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-xxl-5">
                                <div className="text-center text-xxl-start">
                                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                        <div className="text-uppercase">Design &middot; Development &middot; Marketing
                                        </div>
                                    </div>
                                    <div className="fs-3 fw-light text-muted">I can help your business to</div>
                                    <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Get online and grow fast</span>
                                    </h1>
                                    <div
                                        className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                        <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                                           href="resume.html">Resume</a>
                                        <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                                           href="projects.html">Projects</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7">
                                <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                                    <div className="profile bg-gradient-primary-to-secondary">
                                        <img className="profile-img" src="/profile.png" alt="profile"/>`
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="bg-light py-5">
                    <div className="container px-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-xxl-8">
                                <div className="text-center my-5">
                                    <h2 className="display-5 fw-bolder"><span
                                        className="text-gradient d-inline">About Me</span></h2>
                                    <p className="lead fw-light mb-4">My name is Start Bootstrap and I help brands
                                        grow.</p>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis
                                        aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque
                                        dolorem?</p>
                                    <div className="d-flex justify-content-center fs-2 gap-4">
                                        <a className="text-gradient" href="#!"><i className="bi bi-twitter"></i></a>
                                        <a className="text-gradient" href="#!"><i className="bi bi-linkedin"></i></a>
                                        <a className="text-gradient" href="#!"><i className="bi bi-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            </body>
            <div ref={resumeRef} className="d-flex flex-column h-100 bg-light">
            <main className="flex-shrink-0">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span>
                        </h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            <section>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                                    <a className="btn btn-primary px-4 py-3" href="#!">
                                        <div className="d-inline-block bi bi-download me-2"></div>
                                        Download Resume
                                    </a>
                                </div>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-primary fw-bolder mb-2">2019 - Present</div>
                                                    <div className="small fw-bolder">Web Developer</div>
                                                    <div className="small text-muted">Stark Industries</div>
                                                    <div className="small text-muted">Los Angeles, CA</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                                                    laudantium, voluptatem quis repellendus eaque sit animi illo ipsam
                                                    amet officiis corporis sed aliquam non voluptate corrupti excepturi
                                                    maxime porro fuga.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-primary fw-bolder mb-2">2017 - 2019</div>
                                                    <div className="small fw-bolder">SEM Specialist</div>
                                                    <div className="small text-muted">Wayne Enterprises</div>
                                                    <div className="small text-muted">Gotham City, NY</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                                                    laudantium, voluptatem quis repellendus eaque sit animi illo ipsam
                                                    amet officiis corporis sed aliquam non voluptate corrupti excepturi
                                                    maxime porro fuga.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">2015 - 2017</div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">Barnett College</div>
                                                        <div className="small text-muted">Fairfield, NY</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">Master's</div>
                                                        <div className="small text-muted">Web Development</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                                                    laudantium, voluptatem quis repellendus eaque sit animi illo ipsam
                                                    amet officiis corporis sed aliquam non voluptate corrupti excepturi
                                                    maxime porro fuga.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">2011 - 2015</div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">ULA</div>
                                                        <div className="small text-muted">Los Angeles, CA</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">Undergraduate</div>
                                                        <div className="small text-muted">Computer Science</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
                                                    laudantium, voluptatem quis repellendus eaque sit animi illo ipsam
                                                    amet officiis corporis sed aliquam non voluptate corrupti excepturi
                                                    maxime porro fuga.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="pb-5"></div>
                            <section>
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="mb-5">
                                            <div className="d-flex align-items-center mb-4">
                                                <div
                                                    className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                    <i className="bi bi-tools"></i></div>
                                                <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span>
                                                </h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">SEO/SEM
                                                        Marketing
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Statistical
                                                        Analysis
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web
                                                        Development
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Network
                                                        Security
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adobe
                                                        Software Suite
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">User
                                                        Interface Design
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-0">
                                            <div className="d-flex align-items-center mb-4">
                                                <div
                                                    className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                    <i className="bi bi-code-slash"></i></div>
                                                <h3 className="fw-bolder mb-0"><span
                                                    className="text-gradient d-inline">Languages</span></h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Ruby
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div
                                                        className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            </div>
            <div ref={projectsRef} className="d-flex flex-column h-100 bg-light">
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
                                                <h2 className="fw-bolder">Project Name 1</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim
                                                    eum illum aperiam placeat esse? Mollitia omnis minima saepe
                                                    recusandae libero, iste ad asperiores! Explicabo commodi quo itaque!
                                                    Ipsam!</p>
                                            </div>
                                            <img className="img-fluid"
                                                 src="https://dummyimage.com/300x400/343a40/6c757d" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card overflow-hidden shadow rounded-4 border-0">
                                    <div className="card-body p-0">
                                        <div className="d-flex align-items-center">
                                            <div className="p-5">
                                                <h2 className="fw-bolder">Project Name 2</h2>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim
                                                    eum illum aperiam placeat esse? Mollitia omnis minima saepe
                                                    recusandae libero, iste ad asperiores! Explicabo commodi quo itaque!
                                                    Ipsam!</p>
                                            </div>
                                            <img className="img-fluid"
                                                 src="https://dummyimage.com/300x400/343a40/6c757d" alt="..."/>
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
            <div ref={contactRef} className="d-flex flex-column">
            <main className="flex-shrink-0">
                <section className="py-5">
                    <div className="container px-5">
                        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
                            <div className="text-center mb-5">
                                <div
                                    className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                                    <i className="bi bi-envelope"></i></div>
                                <h1 className="fw-bolder">Get in touch</h1>
                                <p className="lead fw-normal text-muted mb-0">Let's work together!</p>
                            </div>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8 col-xl-6">
                                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="name" type="text"
                                                   placeholder="Enter your name..." data-sb-validations="required"/>
                                            <label htmlFor="name">Full name</label>
                                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is
                                                required.
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="email" type="email"
                                                   placeholder="name@example.com" data-sb-validations="required,email"/>
                                            <label htmlFor="email">Email address</label>
                                            <div className="invalid-feedback" data-sb-feedback="email:required">An email
                                                is required.
                                            </div>
                                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is
                                                not valid.
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input className="form-control" id="phone" type="tel"
                                                   placeholder="(123) 456-7890" data-sb-validations="required"/>
                                            <label htmlFor="phone">Phone number</label>
                                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone
                                                number is required.
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <textarea className="form-control" id="message" type="text"
                                                      placeholder="Enter your message here..."
                                                      style={{"height": "10rem"}}
                                                      data-sb-validations="required"></textarea>
                                            <label htmlFor="message">Message</label>
                                            <div className="invalid-feedback" data-sb-feedback="message:required">A
                                                message is required.
                                            </div>
                                        </div>
                                        <div className="d-none" id="submitSuccessMessage">
                                            <div className="text-center mb-3">
                                                <div className="fw-bolder">Form submission successful!</div>
                                                To activate this form, sign up at
                                                <br/>
                                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                            </div>
                                        </div>
                                        <div className="d-none" id="submitErrorMessage">
                                            <div className="text-center text-danger mb-3">Error sending message!</div>
                                        </div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-lg disabled" id="submitButton"
                                                    type="submit">Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-white py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto">
                            <div className="small m-0">Copyright &copy; Your Website 2023</div>
                        </div>
                        <div className="col-auto">
                            <a className="small" href="#!">Privacy</a>
                            <span className="mx-1">&middot;</span>
                            <a className="small" href="#!">Terms</a>
                            <span className="mx-1">&middot;</span>
                            <a className="small" href="#!">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </>
    );
}

export default App;
