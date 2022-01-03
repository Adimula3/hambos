
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
      <Router>
          <div className="App">
              <Navbar/>
              <div className='content'>
                  <Routes>
                      <Route exact path="/" element={<Home />}>
                          <Home/>
                      </Route>
                      <Route path="about" element={<about />}>
                          <about/>
                      </Route>
                  </Routes>


              </div>
          </div>
      </Router>

  );
}

export default App;
