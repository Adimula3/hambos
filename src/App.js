
import Navbar from "./Navbar";
import Home from "./Home";
import about from "./about";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
      <Router>
          <div className="App">
              <Navbar/>
              <div className='content'>
                  <Routes>
                      <Route exact path="/" element={<Home />} /> 
                      <Route path="/about" element={<about />} />
                  </Routes>
              </div>
          </div>
      </Router>

  );
}

export default App;
