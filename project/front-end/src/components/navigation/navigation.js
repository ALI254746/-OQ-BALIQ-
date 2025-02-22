import "./navigation.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Orderfish from "../ourproduct/ourproduct"
import Contact from "../contact/contact"; // Kontakt sahifasi uchun komponent (agar bo'lsa)
import About from "../aboutwe/aboutwe"; // Haqida sahifasi uchun komponent (agar bo'lsa)
import OurProduct from "../orderfish/orderfish"; // Mahsulotlar sahifasi uchun komponent (agar bo'lsa)
import {DataProvider} from "../../data"
import { useState } from "react";

function Navigation() {
  const [orders,setOrders]=useState([]);
  const submitOrder=(order)=>{
    setOrders([...orders,order])
  }
  return (
   <DataProvider>
     <Router>
      <div className="navigation">
        <div className="nav-logo">
          <img src="/oqbaliq.webp" alt="Logo" />
        </div>
        <div className="nav-list">
          <ul>
            <li className="li"><Link className="list-link" to="orderfish">Our Product</Link></li>
            <li className="li"><Link className="list-link" to="contact">Contact Us</Link></li>
            <li className="li"><Link className="list-link" to="about">About We</Link></li>
            <li className="li"><Link className="list-link" to="ourproduct">Admin</Link></li>
          </ul>
        </div>
      </div>

      <Routes>
        <Route path="orderfish" element={<Orderfish  orders={orders}/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="ourproduct" element={
          <OurProduct submitOrder={submitOrder} />}/>
         </Routes>
    </Router>
   </DataProvider>
  );
}

export default Navigation;
