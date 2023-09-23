import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";
import VehicleModels from "./components/VehicleModels";
import Testimonials from "./components/Testimonials";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import {AiOutlineCar} from "react-icons/ai";
import {sel_options,sel_options1,sel_options2} from "./data/data"

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <ul className='list'>
        <li>
            <Link to=""><AiOutlineCar size="40" color="red"/></Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vehiclemodels">Vehicle Models</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/ourteam">Our Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home sel_options={sel_options} sel_options1={sel_options1} sel_options2={sel_options2} />} />
        <Route path="/about" element={<About />} />
        <Route path="/vehiclemodels" element={<VehicleModels />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
