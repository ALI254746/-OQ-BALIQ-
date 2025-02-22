import "./navigation.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Orderfish from "../ourproduct/ourproduct";
import Contact from "../contact/contact";
import About from "../aboutwe/aboutwe";
import OurProduct from "../orderfish/orderfish";
import { DataProvider } from "../../data";
;

function NavigationWrapper() {
  return (
    <Router>
      <DataProvider>
        <Navigation />
        <Routes>
          <Route path="orderfish" element={<Orderfish />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="ourproduct" element={<OurProduct />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <div className="navigation">
      <div className="nav-logo">
        <img src="/oqbaliq.webp" alt="Logo" />
      </div>
      <div className="nav-list">
        <ul>
          <li className={location.pathname === "/orderfish" ? "active" : ""}>
            <Link className="list-link" to="/orderfish">Our Product</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link className="list-link" to="/contact">Contact Us</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link className="list-link" to="/about">About We</Link>
          </li>
          <li className={location.pathname === "/ourproduct" ? "active" : ""}>
            <Link className="list-link" to="/ourproduct">Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationWrapper;
