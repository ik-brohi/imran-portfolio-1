import './App.css';
import React, {useRef} from 'react';
import Navbar from "./components/Navbar";
import Resume from "./layout/Resume";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Footer from "./components/Footer";

function App() {
    // const resumeRef = useRef(null);
    // const projectsRef = useRef(null);
    // const contactRef = useRef(null);
    //
    // const scrollToResume = () => {
    //     if (resumeRef.current) {
    //         resumeRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };
    //
    // const scrollToProjects = () => {
    //     if (projectsReSSSSSf.current) {
    //         projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    return (
        <>
            <body className="d-flex flex-column h-100">
            <main className="flex-shrink-0">
                <header className="py-5">
                    <Navbar/>
                    <div className="container px-5 pb-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-xxl-5">
                                <div className="text-center text-xxl-start">
                                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                                        <div className="text-uppercase">Professional &middot; Software &middot; Engineer
                                        </div>
                                    </div>
                                    <div className="fs-3 fw-light text-muted">I can help to develop Software Application to</div>
                                    <h1 className="display-3 fw-bolder mb-5"><span className="text-gradient d-inline">Get online your business grow fast</span>
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
                                        <img className="profile-img" src="/imran.jpg" alt="profile"/>`
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
                                    <p className="lead fw-light mb-4">Code Craftsmanship and Innovation: Building the Digital Future with Imran</p>
                                    <p className="text-muted">Imran is a talented software engineer who is passionate about technology and innovation. With a strong foundation in coding and problem-solving, Imran thrives in the dynamic world of software development. He enjoys tackling complex challenges, writing clean and efficient code, and creating software solutions that make a positive impact. Imran's dedication to continuous learning and staying up-to-date with the latest industry trends allows him to excel in this ever-evolving field. Whether it's building web applications, mobile apps, or solving intricate technical issues, Imran is a valuable asset to any team, bringing both technical expertise and a creative approach to his work.</p>
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
            {/*<div ref={resumeRef} className="d-flex flex-column h-100 bg-light">*/}
            <Resume/>
            {/*<div ref={projectsRef} className="d-flex flex-column h-100 bg-light">*/}
            <Projects/>
            {/*<div ref={contactRef} className="d-flex flex-column">*/}
            <Contact/>
            <Footer/>

        </>
    );
}

export default App;
