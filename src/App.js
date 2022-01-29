
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (

            <Router>
                <div className="App">
                    <Navbar/>
                </div>
              <div className='content'>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact"element={<Contact />} />

                  </Routes>
              </div>
      </Router>


  );
}

export default App;
