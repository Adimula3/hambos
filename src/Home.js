import React from "react";
import {Link} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import './Home.css';


const Home = () => {
    return (
        <div className="carousel">
            {/*Carousel*/}
            <Carousel>
                <Carousel.Item interval={1000} className="item">
                        <h3>Welcome to <span>HAMBOS</span></h3>
                        <p>Ideas are easy. Implementation is hard.</p>
                        <Link to='https://' style={{textDecoration: 'none'}} className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
                </Carousel.Item>
                <Carousel.Item interval={1000} className="item">
                        <h3>We are choices.</h3>
                        <p>We have a “strategic” plan its called doing things</p>
                        <Link to='https://' style={{textDecoration: 'none'}} className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
                </Carousel.Item>
                <Carousel.Item className="item">

                        <h3>Sequi ea ut et est quaerat</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Link to='https://' style={{textDecoration: 'none'}} className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>

                </Carousel.Item>
            </Carousel>

        </div>
    );
 }
 export default Home;
