import {Link} from "react-router-dom";


const Navbar = () => {
  return (
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex justify-content-between align-items-center">

          <div className="logo">
            <h1 className="text-light"><a href="/"><span>HAMBOS</span></a></h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><Link className="active" to="/">Home</Link></li>
              <li><Link to="/about.js">About</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">Portfolio</Link></li>
              <li><Link to="/">Team</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Contact Us</Link></li>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default Navbar;