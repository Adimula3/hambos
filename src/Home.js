import React from "react";
import {Link} from "react-router-dom";
import {Carousel} from "react-bootstrap";
import './Home.css';
//import ImageOne from './Img/pexels-emma-blackbourn-3789449.jpg'

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

            <div className="container-fluid mt-3">
                <h3>Carousel Example</h3>
                <p>The following example shows how to create a basic carousel with indicators and controls.</p>
            </div>
        </div>
    );
 }
 export default Home;
