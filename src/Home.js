import {Link} from "react-router-dom";

const Home = () => {
    return (

        <section id="hero" className="d-flex justify-content-center align-items-center">
            <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">


                <div className="carousel-item active">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>HAMBOS</span></h2>
                        <p className="animate__animated animate__fadeInUp">Ideas are easy. Implementation is hard.</p>
                        <Link to='https://' className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
                    </div>
                </div>


                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">We are choices.</h2>
                        <p className="animate__animated animate__fadeInUp">We have a “strategic” plan its called doing things</p>
                        <Link to='https://' className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="carousel-container">
                        <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <Link to='https://' className="btn-get-started animate__animated animate__fadeInUp">Read More</Link>
                    </div>
                </div>

                <Link className="carousel-control-prev" to="#heroCarousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-left-arrow-arrows-dreamstale-lineal-dreamstale.png" alt=""/></span>
                </Link>

                <Link className="carousel-control-next" to="#heroCarousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"><img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-right-arrow-arrows-dreamstale-lineal-dreamstale-15.png" alt=""/></span>
                </Link>

            </div>
        </section>

    );
 }
 export default Home;