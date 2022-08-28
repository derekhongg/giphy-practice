import "./App.css";

import Home from './components/Home';
import Gif from './components/Gif';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="body">
    {/* router allows to conditionally choose what page to display */}
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Gif/:postSlug" element={<Gif />} />
      </Routes>
    </Router>
    
  </div>
  );
}

export default App;