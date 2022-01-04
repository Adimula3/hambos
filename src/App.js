
import Navbar from "./Navbar";
import Home from "./Home";
import about from "./about";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
      <div className="App">
           <Navbar/>
            <Router>
              <div className='content'>
                  <Routes>
                      <Route exact path="/" element={<Home />} /> 
                      <Route path="/about" element={<about />} />
                  </Routes>
              </div>
      </Router>
 </div>

  );
}

export default App;
