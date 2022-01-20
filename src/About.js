import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <main id="main">
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2>About</h2>
                        <ol>
                            <li><Link className="change" to="/">Home</Link></li>
                            <li><Link className="change" to="/About">About</Link></li>
                        </ol>
                    </div>

                </div>
            </section>

            <section id="about" className="about">
                <div className="container">

                    <div className="row content">
                        <div className="col-lg-6">
                            <h2>HAMBOS INCORPORATION</h2>
                            <h3>We offer the best solution to broad range of clientele</h3>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Hambos Limited was established 2013 was founded by Kolawole Hammed
                                his sole purpose of establishment was to make the everyday lives our customers easier
                                since the establishment of the company we have mad over 500 clients
                                we use our company happy
                                and we hope to keep stjhfkkjhll
                            </p>
                            <ul>
                                <li><i className="ri-check-double-line"></i> “Our core Values are the "glue" that holds your
                                    business together.”
                                </li>
                                <li><i className="ri-check-double-line"></i> “We position your value not your price”
                                </li>
                                <li><i className="ri-check-double-line"></i> “We visualize a way to make a specific part of your world a better place for all those living
                                    in it and not just yourself.
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
export default About;
